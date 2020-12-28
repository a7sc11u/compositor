import type { TNode } from "../mst";

export const useNodeStyles = ({ node }: { node: TNode }) => {
  let style = {
    boxShadow: node.state.drop
      ? `#0000ff 0px 0px 0px 2px inset`
      : node.state.hover
      ? `#00ffcc 0px 0px 0px 2px inset`
      : node.state.selected
      ? `#00ff00 0px 0px 0px 2px inset`
      : "none",
  };

  return { style };
};
