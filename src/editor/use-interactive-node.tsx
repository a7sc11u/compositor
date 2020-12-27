import { useRef, MouseEvent } from "react";
import { useDrag } from "react-dnd";

import type { TNode } from "../mst";
import { useProject } from "../mst";

export const useInteractiveNode = (node: TNode) => {
  const ref = useRef<HTMLDivElement>(null);

  const [_, drag] = useDrag({
    item: { type: "component", componentType: node.type },
  });

  const project = useProject();

  let events = {
    onMouseOver: (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      node.state.setHover(true);
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
    boxShadow: node.state.hover ? `#ff00cc 0px 0px 0px 2px inset` : "none",
  };

  return { events, style, ref: drag(ref) };
};
