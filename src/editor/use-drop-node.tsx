import React from "react";
import { boolean } from "mobx-state-tree/dist/internal";
import { useDrop, DropTargetMonitor } from "react-dnd";
import type { TNode } from "src/mst";

export const useDropNode = ({
  node,
  accept,
  enabled = true,
}: {
  node: TNode;
  accept: string | string[];
  enabled?: boolean;
}) => {
  const handleDrop = React.useCallback((item) => {
    if (item.type === "new") {
      node.createChild(item.componentType);
      return;
    }

    // node.moveToChildren(item.node);
  }, []);

  const [{ isOver }, drop] = useDrop({
    accept: accept,
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
