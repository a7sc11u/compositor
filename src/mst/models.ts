import { types, Instance } from "mobx-state-tree";

const typesBaseline = types.union(
  ...[4, 5, 6, 7, 8, 9, 10, 11, 12].map(types.literal)
);

const typesViewMode = types.union(
  ...["edit", "preview", "tree"].map(types.literal)
);

const TypeNode = types.late(() => types.union(BoxModel, TextModel));

const NodeChildren = types.late(() => types.array(types.reference(TypeNode)));

const MediaQueryModel = types.model("MediaQueryModel", {
  id: types.identifier,
  size: types.number,
});

const FontFamily = types.model("FontFamily", {
  id: types.identifier,
  familyName: types.string,
});

const ColorModel = types.model("ColorModel", {
  id: types.identifier,
  hex: types.string,
});

const ElementState = types
  .model("ElementState", {
    hover: types.boolean,
  })
  .actions((model) => ({
    setHover(hover: boolean) {
      model.hover = hover;
    },
  }));

const BoxModel = types.model("BoxModel", {
  id: types.identifier,
  state: ElementState,
  type: types.literal("box"),
  color: types.maybe(types.reference(ColorModel)),
  bg: types.maybe(types.reference(ColorModel)),
  children: NodeChildren,
});

const TextModel = types
  .model("TextModel", {
    id: types.identifier,
    state: ElementState,
    type: types.literal("text"),
    fontFamily: types.reference(FontFamily),
    value: types.string,
  })
  .actions((model) => ({
    setValue(newValue: string) {
      model.value = newValue;
    },
  }));

const PageModel = types.model("Page", {
  id: types.identifier,
  title: types.string,
  children: NodeChildren,
});

const EditorState = types
  .model("EditorState", {
    mode: typesViewMode,
    selectedNode: types.maybeNull(types.reference(TypeNode)),
  })
  .actions((model) => ({
    setSelectedNode(newValue: String) {
      model.selectedNode = newValue;
    },
    clearSelectedNode() {
      model.selectedNode = null;
    },
  }));

const ProjectModel = types.model("Project", {
  editor: EditorState,
  mql: types.array(MediaQueryModel),
  baseline: types.optional(typesBaseline, 8),
  fonts: types.array(FontFamily),
  colors: types.array(ColorModel),
  pages: types.array(PageModel),
  nodes: types.array(TypeNode),
});

export { ProjectModel };

export type TProject = Instance<typeof ProjectModel>;
export type TPage = Instance<typeof PageModel>;

export type TBox = Instance<typeof BoxModel>;
export type TText = Instance<typeof TextModel>;

export type TFontFamily = Instance<typeof FontFamily>;
export type TColor = Instance<typeof ColorModel>;
