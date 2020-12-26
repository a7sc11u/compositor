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
    hover: types.boolean,
  })
  .actions((model) => ({
    setHover(hover: boolean) {
      model.hover = hover;
    },
  }));

const BoxModel = types.model("BoxModel", {
  id: types.identifier,
  name: types.maybeNull(types.string),
  state: ElementState,
  type: types.literal("box"),
  color: types.maybe(types.reference(ColorModel)),
  bg: types.maybe(types.reference(ColorModel)),
  children: NodeChildren,
});

const TextModel = types
  .model("TextModel", {
    id: types.identifier,
    name: types.maybeNull(types.string),
    state: ElementState,
    type: types.literal("text"),
    fontFamily: types.reference(FontFace),
    fontSize: types.number,
    fontWeight: types.number,
    fontStyle: types.enumeration("style", ["normal", "italic"]),
    featureSettings: types.maybeNull(types.array(types.string)),
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
  fonts: types.array(FontFace),
  colors: types.array(ColorModel),
  pages: types.array(PageModel),
  nodes: types.array(TypeNode),
});

export { ProjectModel };

export type TProject = Instance<typeof ProjectModel>;
export type TPage = Instance<typeof PageModel>;

export type TBox = Instance<typeof BoxModel>;
export type TText = Instance<typeof TextModel>;

export type TFontFace = Instance<typeof FontFace>;
export type TColor = Instance<typeof ColorModel>;
