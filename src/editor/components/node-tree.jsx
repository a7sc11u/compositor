import React from "react";
import { observer } from "mobx-react-lite";
import { useInteractiveNode } from "../use-interactive-node";

export const TreeNode = observer((props) => {
  const { events, ref } = useInteractiveNode({node: props.model});

  return (
    <div
      style={{
        paddingBottom: "4px",
        userSelect: "none",
        backgroundColor: props.model.state.hover ? "#e5e5e5" : "transparent",
      }}
      ref={ref}
      {...events}
    >
      {props.model.name || props.model.type}
      {props.model?.children ? (
        <>
          <div
            style={{
              paddingLeft: "8px",
            }}
          >
            {props.model?.children?.map((node) => (
              <TreeNode key={node.id} model={node} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
});
