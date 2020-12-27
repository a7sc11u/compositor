import React from "react";
import { observer } from "mobx-react-lite";
import { useInteractiveNode } from "../use-interactive-node";

export const TreeNode = observer((props) => {
  const { events, ref } = useInteractiveNode(props.data);

  return (
    <div
      style={{
        paddingBottom: "4px",
        userSelect: "none",
        backgroundColor: props.data.state.hover ? "#e5e5e5" : "transparent",
      }}
      ref={ref}
      {...events}
    >
      {props.data.name || props.data.type}
      {props.data?.children ? (
        <>
          <div
            style={{
              paddingLeft: "8px",
            }}
          >
            {props.data?.children?.map((child) => (
              <TreeNode key={child.id} data={child} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
});
