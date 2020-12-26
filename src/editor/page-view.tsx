import * as React from "react";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";

import { TPage, useProject } from "../mst";
import { Node } from "./components/node";

interface PageComponentProps {
  page: TPage;
}

export const PageView = observer((props: PageComponentProps) => {
  const project = useProject();

  const handleDrop = React.useCallback(
    (item) => {
      const node = project.createNode(item.type);
      props.page.addChild(node.id);
    },
    [project]
  );

  const [{ isOver, canDrop }, ref] = useDrop({
    accept: ["text", "box"],
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
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
