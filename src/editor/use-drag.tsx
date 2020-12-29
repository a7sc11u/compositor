import { useRef, MouseEvent } from "react";
import { useDrag } from "react-dnd";

export const useDragNode = (node: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const [_, drag] = useDrag({
    item: { type: node.type },
  });

  return { ref: drag(ref) };
};
