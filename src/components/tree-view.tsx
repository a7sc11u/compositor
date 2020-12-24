import * as React from "react";
import { observer } from "mobx-react-lite";

import type { TPage } from "../mst";
import { TreeNode } from "./node-tree";

interface TreeComponentProps {
  page?: TPage;
}

export const TreeView = observer((props: TreeComponentProps) => {
  return (
    <article>
      {props.page?.children.map((child) => (
        <TreeNode key={child.id} data={child} />
      ))}
    </article>
  );
});
