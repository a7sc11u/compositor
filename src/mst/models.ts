import {
  types,
  Instance,
  IAnyModelType,
  getParent,
  detach,
  getPath,
  getParentOfType,
} from "mobx-state-tree";
import { uuid } from "./utils";

const createComponent = (type) => {
  switch (type) {
    case "text":
      return TextModel.create({
        id: uuid(),
        type: "text",
        leaf: true,
        fontFamily: "averta-regular",
        fontSize: 32,
        fontStyle: "italic",
        fontWeight: 700,
        value: "New Text",
        state: { drop: false, hover: false, selected: false },
      });
    case "box":
      return BoxModel.create({
        id: uuid(),
        type: "box",
        color: "black",
        bg: "grey",
        leaf: false,
        children: [],
        state: { drop: false, hover: false, selected: false },
      });
  }
};

const typesBaseline = types.union(
  ...[4, 5, 6, 7, 8, 9, 10, 11, 12].map(types.literal)
);

const typesViewMode = types.union(
  ...["edit", "preview", "tree"].map(types.literal)
);

const MediaQueryModel = types.model("MediaQueryModel", {
  id: types.identifier,
  size: types.number,
});

const FontFile = types.model("FontFile", {
  script: types.maybeNull(types.string),
  woff: types.string,
  unicodeRange: types.maybeNull(types.string),
});

const FontMetrics = types.model("FontMetrics", {
  ascent: types.maybeNull(types.number),
  descent: types.maybeNull(types.number),
  capHeight: types.maybeNull(types.number),
  xHeight: types.maybeNull(types.number),
  lineGap: types.maybeNull(types.number),
  unitsPerEm: types.maybeNull(types.number),
});

const FontFace = types.model("FontFace", {
  id: types.identifier,
  familyName: types.string,
  weight: types.union(types.number, types.array(types.number)),
  italic: types.union(types.boolean, types.array(types.number)),
  metrics: FontMetrics,
  files: types.array(FontFile),
  features: types.maybeNull(types.array(types.string)),
});

const ColorModel = types.model("ColorModel", {
  id: types.identifier,
  hex: types.string,
});

const ElementState = types
  .model("ElementState", {
    drop: types.boolean,
    hover: types.boolean,
    selected: types.boolean,
  })
  .actions((model) => ({
    setDrop(drop: boolean) {
      model.drop = drop;
    },
    setHover(hover: boolean) {
      model.hover = hover;
    },
    setSelected(selected: boolean) {
      model.selected = selected;
    },
  }));

const BoxModel = types
  .model("BoxModel", {
    id: types.identifier,
    name: types.maybeNull(types.string),
    state: ElementState,
    leaf: types.optional(types.boolean, false),
    type: types.literal("box"),
    color: types.maybe(types.reference(ColorModel)),
    bg: types.maybe(types.reference(ColorModel)),
    children: types.late(() => NodeChildren),
  })
  .actions((model) => ({
    setSelected() {
      const project = getParentOfType(model, ProjectModel);
      project.editor.setSelectedNode(model);
    },
    addChild(node: IAnyModelType) {
      const parent: TNode = getParent(getParent(node));
      parent.detachChild(node);
      model.children.push(node);
    },
    detachChild(node) {
      return detach(node);
    },
    createChild(type: String) {
      const node = createComponent(type);
      model.children.push(node);
      node.setSelected();
    },
  }));

const TextModel = types
  .model("TextModel", {
    id: types.identifier,
    name: types.maybeNull(types.string),
    state: ElementState,
    leaf: types.optional(types.boolean, true),
    type: types.literal("text"),
    fontFamily: types.reference(FontFace),
    fontSize: types.number,
    fontWeight: types.number,
    fontStyle: types.enumeration("style", ["normal", "italic"]),
    featureSettings: types.maybeNull(types.array(types.string)),
    value: types.string,
  })
  .actions((model) => ({
    setSelected() {
      const project = getParentOfType(model, ProjectModel);
      project.editor.setSelectedNode(model);
    },
    setValue(newValue: string) {
      model.value = newValue;
    },
  }));

const TypeNode = types.union(BoxModel, TextModel);
const NodeChildren = types.array(TypeNode);

const PageModel = types
  .model("Page", {
    id: types.identifier,
    title: types.string,
    state: ElementState,
    children: types.late(() => NodeChildren),
  })
  .actions((model: any) => ({
    addChild(node: IAnyModelType) {
      const parent: TNode = getParent(getParent(node));
      parent.detachChild(node);
      model.children.push(node);
    },
    detachChild(node) {
      return detach(node);
    },
    createChild(type: String) {
      const node = createComponent(type);
      model.children.push(node);
      node.setSelected();
    },
  }));

const EditorState = types
  .model("EditorState", {
    mode: typesViewMode,
    selectedNode: types.maybeNull(types.reference(TypeNode)),
  })
  .actions((model: any) => ({
    clearSelectedNode() {
      if (model.selectedNode) {
        model.selectedNode.state.setSelected(false);
        model.selectedNode = null;
      }
    },
    setSelectedNode(node: TNode) {
      model.clearSelectedNode();
      model.selectedNode = node.id;
      node.state.setSelected(true);
    },
  }));

const ProjectModel = types.model("Project", {
  editor: EditorState,
  mql: types.array(MediaQueryModel),
  baseline: types.optional(typesBaseline, 8),
  fonts: types.array(FontFace),
  colors: types.array(ColorModel),
  pages: types.array(PageModel),
});

export { ProjectModel };

export type TProject = Instance<typeof ProjectModel>;
export type TPage = Instance<typeof PageModel>;

export type TBox = Instance<typeof BoxModel>;
export type TText = Instance<typeof TextModel>;
export type TNode = TPage | TBox | TText;

export type TFontFace = Instance<typeof FontFace>;
export type TColor = Instance<typeof ColorModel>;
