import React from "react";
import { observer } from "mobx-react-lite";

import type { TBox, TText } from "../mst";

interface NodeProps {
  data: TText | TBox;
}

export const TreeNode = observer((props: NodeProps) => {
  return (
    <div style={{ paddingLeft: "10px", paddingTop: "5px" }}>
      {props.data.type}
      {props.data?.children ? (
        <>
          <div style={{ paddingLeft: "10px" }}>
            {props.data?.children?.map((child) => (
              <TreeNode key={child.id} data={child} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
});
