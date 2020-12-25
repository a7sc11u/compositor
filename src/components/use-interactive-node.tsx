import { useRef, MouseEvent } from "react";
import type { TBox, TText } from "../mst";
import { useProject } from "../mst";

export const useInteractiveNode = (node: TText | TBox) => {
  const ref = useRef<HTMLDivElement>(null);

  const project = useProject();

  let events = {
    onMouseOver: (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      node.state.setHover(true);
      console.log(node);
    },
    onMouseOut: () => {
      node.state.setHover(false);
    },
    onClick: (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      project.editor.setSelectedNode(node.id);
    },
  };

  let style = {
    border: node.state.hover ? "1px solid red" : "none",
  };

  return { events, style, ref };
};
