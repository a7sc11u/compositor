import * as React from "react";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";

import type { TPage } from "../mst";
import { Node } from "./components/node";
import { useDropNode } from "./use-drop-node";

interface PageComponentProps {
  page: TPage;
}

export const PageView = observer((props: PageComponentProps) => {
  // const { isOver, drop } = useDropNode(props.page);
  const handleDrop = React.useCallback((item) => {
    const node = props.page.createNode(item.componentType);
    props.page.addChild(node.id);
  }, []);

  const [{ isOver, canDrop }, ref] = useDrop({
    accept: ["component"],
    drop: (item, monitor) => {
      if (!monitor.isOver()) {
        return;
      }

      handleDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: true,
    }),
  });

  return (
    <article ref={ref} style={{ flex: "1" }}>
      {props.page.children.map((child) => (
        <Node key={child.id} data={child} />
      ))}
    </article>
  );
});
