import React from "react";
import { observer } from "mobx-react-lite";
import { useInteractiveNode } from "../hooks/use-interactive-node";

import type { TBox, TText } from "../mst";

interface NodeProps {
  data: TText | TBox;
}

export const TreeNode = observer((props: NodeProps) => {
  const { events, ref } = useInteractiveNode(props.data);

  return (
    <div
      style={{ paddingBottom: "4px", userSelect: "none" }}
      ref={ref}
      {...events}
    >
      {props.data.type}
      {props.data?.children ? (
        <>
          <div style={{ paddingLeft: "8px" }}>
            {props.data?.children?.map((child) => (
              <TreeNode key={child.id} data={child} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
});
