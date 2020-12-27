import React from "react";
import { boolean } from "mobx-state-tree/dist/internal";
import { useDrop, DropTargetMonitor } from "react-dnd";
import type { TNode } from "src/mst";

export const useDropNode = ({
  node,
  enabled = true,
}: {
  node: TNode;
  enabled?: boolean;
}) => {
  const handleDrop = React.useCallback((item) => {
    node.createChild(item.componentType);
  }, []);

  const [{ isOver }, drop] = useDrop({
    accept: "component",
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      if (!monitor.isOver()) {
        return;
      }

      handleDrop(item);
    },
    canDrop: () => enabled,
  });

  return { drop, isOver };
};
