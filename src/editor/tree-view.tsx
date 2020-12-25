import * as React from "react";
import { observer } from "mobx-react-lite";

import type { TPage } from "../mst";
import { TreeNode } from "../components/node-tree";

interface TreeComponentProps {
  page?: TPage;
}

export const TreeView = observer((props: TreeComponentProps) => {
  return (
    <div>
      {props.page?.children.map((child) => (
        <TreeNode key={child.id} data={child} />
      ))}
    </div>
  );
});
