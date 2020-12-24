import { types, Instance } from "mobx-state-tree";

const typesBaseline = types.union(
  ...[4, 5, 6, 7, 8, 9, 10, 11, 12].map(types.literal)
);

const typesNodes = types.late(() =>
  types.array(types.union(BoxModel, TextModel))
);

const FontFamily = types.model("FontFamily", {
  id: types.identifier,
  familyName: types.string,
});

const ColorModel = types.model("ColorModel", {
  id: types.identifier,
  hex: types.string,
});
const BoxModel = types.model("BoxModel", {
  type: types.literal("box"),
  color: types.maybe(types.reference(ColorModel)),
  children: typesNodes,
});
const TextModel = types.model("TextModel", {
  type: types.literal("text"),
  fontFamily: types.reference(FontFamily),
  value: types.string,
});

const PageModel = types.model("Page", {
  id: types.identifier,
  title: types.string,
  children: typesNodes,
});

const ProjectModel = types.model("Project", {
  baseline: types.optional(typesBaseline, 8),
  fonts: types.array(FontFamily),
  colors: types.array(ColorModel),
  pages: types.array(PageModel),
});

export { ProjectModel };

export type TProject = Instance<typeof ProjectModel>;
export type TPage = Instance<typeof PageModel>;

export type TBox = Instance<typeof BoxModel>;
export type TText = Instance<typeof TextModel>;

export type TFontFamily = Instance<typeof FontFamily>;
export type TColor = Instance<typeof ColorModel>;

/** ------------------------------------------
 * EXPERIMENTAL
 ------------------------------------------ */

const typesDirection = types.union(
  ...["row", "column", "row-reverse", "color-reverse"].map(types.literal)
);

const StackModel = types.model("StackModel", {
  type: types.literal("stack"),
  direction: types.optional(typesDirection, "column"),
  gap: types.optional(types.number, 0),
  children: typesNodes,
});

export type TStack = Instance<typeof StackModel>;
