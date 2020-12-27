import { useRef, MouseEvent } from "react";
import { useDrag } from "react-dnd";

import type { TNode } from "../mst";

export const useDragNode = (node: TNode) => {
  const ref = useRef<HTMLDivElement>(null);

  const [_, drag] = useDrag({
    item: { type: node.type },
  });

  return { ref: drag(ref) };
};
