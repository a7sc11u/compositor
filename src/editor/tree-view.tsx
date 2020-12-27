import * as React from "react";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";

import { TPage, useProject } from "../mst";
import { TreeNode } from "./components/node-tree";

interface TreeComponentProps {
  page: TPage;
}

export const TreeView = observer((props: TreeComponentProps) => {
  const handleDrop = React.useCallback((item) => {
    const node = props.page.createNode(item.componentType);
    props.page.addChild(node.id);
  }, []);

  const [{ isOver, canDrop }, ref] = useDrop({
    accept: "component",
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: true,
    }),
  });

  return (
    <div ref={ref} className="tree" style={{ flex: "1", width: "100%" }}>
      {props.page.children.map((child) => (
        <TreeNode key={child.id} data={child} />
      ))}
    </div>
  );
});
