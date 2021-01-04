export type As = React.ElementType;

export type PropsOf<T extends As> = React.ComponentProps<T>;

export type HTMLProps<T extends As> = Omit<PropsOf<T>, "children"> & {
  as?: As;
};

export interface IFontFile {
  script?: string | null;
  woff: string;
  unicodeRange?: string | null;
}

export interface IFontMetrics {
  ascent: number;
  descent: number;
  capHeight: number;
  xHeight: number;
  lineGap: number;
  unitsPerEm: number;
}

export interface IFontFace {
  id: string;
  familyName: string;
  weight: number;
  italic: boolean;
  metrics: IFontMetrics;
  files: IFontFile[];
  features?: string[];
}

export interface IHue {
  id: string;
  hex: string;
}

export interface IMql {
  id: string;
  size: number;
}

export interface INodeState {
  drop: boolean;
  hover: boolean;
  selected: boolean;
  setDrop: (drop: boolean) => void;
  setHover: (drop: boolean) => void;
  setSelected: (drop: boolean) => void;
}

export interface ITextNode {
  id: string;
  type: "text";
  name: string;
  state: INodeState;
  leaf?: boolean;
  font: IFontFace;
  fontSize: number;
  leading: number;
  fontWeight: number;
  fontStyle: "normal" | "italic";
  featureSettings?: string[];
  value: string;
  setSelected: () => void;
  setValue: (input: string) => void;
}

export interface IBoxNode {
  id: string;
  type: "box";
  name?: string;
  state: INodeState;
  leaf?: boolean;
  color?: IHue;
  bg?: IHue;
  children?: TNodeChildren;
  setSelected: () => void;
  addChild: (node: TNode) => void;
  detachChild: (node: TNode) => void;
  createChild: (type: string) => void;
}

export interface IContainerNode {
  id: string;
  type: "container";
  name?: string;
  state: INodeState;
  leaf?: boolean;
  children?: TNodeChildren;
  setSelected: () => void;
  addChild: (node: TNode) => void;
  detachChild: (node: TNode) => void;
  createChild: (type: string) => void;
}

export interface IStackNode {
  id: string;
  type: "stack";
  name?: string;
  state: INodeState;
  leaf?: boolean;
  color?: IHue;
  bg?: IHue;
  gap: number;
  children?: TNodeChildren;
  setSelected: () => void;
  addChild: (node: TNode) => void;
  detachChild: (node: TNode) => void;
  createChild: (type: string) => void;
}

export interface IGridNode {
  id: string;
  type: "grid";
  name?: string;
  state: INodeState;
  leaf?: boolean;
  gap: number;
  columns: number;
  children?: TNodeChildren;
  setSelected: () => void;
  addChild: (node: TNode) => void;
  detachChild: (node: TNode) => void;
  createChild: (type: string) => void;
}

export interface IPage {
  id: string;
  title?: string;
  state: INodeState;
  children: TNodeChildren;
  addChild: (node: TNode) => void;
  detachChild: (node: TNode) => void;
  createChild: (type: string) => void;
}

export interface IEditorState {
  mode: any;
  selectedNode: TNode;
  clearSelectedNode: () => void;
  setSelectedNode: (node: TNode) => void;
}

export interface IProject {
  editor: IEditorState;
  mql: any;
  baseline: number;
  fonts: IFontFace[];
  colors: IHue[];
  pages: IPage[];
}

export type TNode =
  | IContainerNode
  | IBoxNode
  | ITextNode
  | IStackNode
  | IGridNode;

export type TDropableNode = IPage | IBoxNode;
export type TNodeChildren = TNode[];
