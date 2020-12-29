import { useRef, MouseEvent, useEffect } from "react";
import { useDrag } from "react-dnd";
import type { TNode } from "../types";

export const useInteractiveNode = ({
  node,
  type,
  isOver,
}: {
  node: TNode;
  type: string;
  isOver: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [_, drag] = useDrag({
    item: { type: type, node: node },
  });

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
      node.setSelected();
    },
  };

  let style = {
    boxShadow: node.state.drop
      ? `#0000ff 0px 0px 0px 2px inset`
      : node.state.hover
      ? `#00ffcc 0px 0px 0px 2px inset`
      : node.state.selected
      ? `#00ff00 0px 0px 0px 2px inset`
      : "none",
  };

  return { events, style, ref: drag(ref) };
};
