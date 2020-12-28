import React, { useCallback } from "react";
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
  const handleDrop = React.useCallback(
    (item) => {
      // create new
      if (item.type === "new") {
        node.createChild(item.componentType);
        return;
      }

      // if drop to self
      if (item.node.id === node.id) return;

      // move child
      node.addChild(item.node);
    },
    [node.id]
  );

  const handleHover = useCallback(
    (drop) => {
      node.state.setDrop(drop);
    },
    [node.id]
  );

  const [{ isOver }, drop] = useDrop({
    accept: accept,
    collect: (monitor) => {
      const isOver = monitor.isOver({ shallow: true }) && monitor.canDrop();
      handleHover(isOver);
      return {
        isOver,
      };
    },

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
