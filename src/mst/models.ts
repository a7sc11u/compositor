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

import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 4,
  },
  wordsPerSentence: {
    max: 6,
    min: 6,
  },
});

const createComponent = (type) => {
  switch (type) {
    case "stack":
      return StackModel.create({
        id: uuid(),
        type: "stack",
        gap: 24,
        leaf: false,
        children: [],
        state: { drop: false, hover: false, selected: false },
      });
    case "grid":
      return GridModel.create({
        id: uuid(),
        type: "grid",
        gap: 24,
        columns: 3,
        leaf: false,
        children: [],
        state: { drop: false, hover: false, selected: false },
      });
    case "container":
      return ContainerModel.create({
        id: uuid(),
        type: "container",
        leaf: false,
        children: [],
        state: { drop: false, hover: false, selected: false },
      });
    case "text":
      return TextModel.create({
        id: uuid(),
        type: "text",
        leaf: true,
        font: "averta-regular",
        fontSize: 32,
        leading: 2,
        fontStyle: "italic",
        fontWeight: 700,
        value: lorem.generateParagraphs(1),
        state: { drop: false, hover: false, selected: false },
      });
    case "box":
      return BoxModel.create({
        id: uuid(),
        type: "box",
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
  ascent: types.number,
  descent: types.number,
  capHeight: types.number,
  xHeight: types.number,
  lineGap: types.number,
  unitsPerEm: types.number,
});

const FontFace = types.model("FontFace", {
  id: types.identifier,
  familyName: types.string,
  weight: types.number,
  italic: types.boolean,
  metrics: FontMetrics,
  files: types.array(FontFile),
  features: types.array(types.string),
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
    addChild(node: any) {
      const parent: any = getParent(getParent(node));
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

const ContainerModel = types
  .model("ContainerModel", {
    id: types.identifier,
    name: types.maybeNull(types.string),
    state: ElementState,
    leaf: types.optional(types.boolean, false),
    type: types.literal("container"),
    children: types.late(() => NodeChildren),
  })
  .actions((model) => ({
    setSelected() {
      const project = getParentOfType(model, ProjectModel);
      project.editor.setSelectedNode(model);
    },
    addChild(node: any) {
      const parent: any = getParent(getParent(node));
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

const StackModel = types
  .model("StackModel", {
    id: types.identifier,
    name: types.maybeNull(types.string),
    state: ElementState,
    leaf: types.optional(types.boolean, false),
    type: types.literal("stack"),
    color: types.maybe(types.reference(ColorModel)),
    bg: types.maybe(types.reference(ColorModel)),
    gap: types.number,
    children: types.late(() => NodeChildren),
  })
  .actions((model) => ({
    setSelected() {
      const project = getParentOfType(model, ProjectModel);
      project.editor.setSelectedNode(model);
    },
    addChild(node: any) {
      const parent: any = getParent(getParent(node));
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

const GridModel = types
  .model("GridModel", {
    id: types.identifier,
    name: types.maybeNull(types.string),
    state: ElementState,
    leaf: types.optional(types.boolean, false),
    type: types.literal("grid"),
    gap: types.number,
    columns: types.number,
    children: types.late(() => NodeChildren),
  })
  .actions((model) => ({
    setSelected() {
      const project = getParentOfType(model, ProjectModel);
      project.editor.setSelectedNode(model);
    },
    addChild(node: any) {
      const parent: any = getParent(getParent(node));
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
    font: types.reference(FontFace),
    fontSize: types.number,
    leading: types.number,
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

const TypeNode = types.union(
  BoxModel,
  TextModel,
  StackModel,
  ContainerModel,
  GridModel
);
const NodeChildren = types.array(TypeNode);

const PageModel = types
  .model("Page", {
    id: types.identifier,
    title: types.string,
    state: ElementState,
    children: types.late(() => NodeChildren),
  })
  .actions((model: any) => ({
    addChild(node: any) {
      const parent: any = getParent(getParent(node));
      parent.detachChild(node);
      model.children.push(node);
    },
    detachChild(node: any) {
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
    setSelectedNode(node: any) {
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
