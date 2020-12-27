import React from "react";
import { useDrag } from "react-dnd";

interface DragComponentProps {
  type: string;
  label: string;
}

export const DragComponent: React.FC<DragComponentProps> = ({
  type,
  label,
}) => {
  const [_, ref] = useDrag({
    item: { type: "new", componentType: type },
  });

  return <button ref={ref}>{label}</button>;
};
