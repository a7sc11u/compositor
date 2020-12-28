import React from "react";
import { observer } from "mobx-react-lite";
import { useInteractiveNode } from "../use-interactive-node";
import { TreeLeaf } from "./tree-leaf";
import { useDropNode } from "../use-drop-node";

export const TreeNode = observer((props) => {
  const { model } = props;

  const { drop, isOver } = useDropNode({
    node: model,
    accept: ["new", "tree"],
  });

  const { events, style, ref } = useInteractiveNode({
    node: model,
    type: "tree",
    isOver,
  });

  return (
    <div
      {...events}
      ref={drop(ref)}
      style={{
        ...style,
        padding: "8px",
        userSelect: "none",
        backgroundColor: props.model.state.hover ? "#e5e5e5" : "transparent",
      }}
    >
      {props.model.name || props.model.type}
      {model?.children ? (
        <div style={{ paddingLeft: "8px" }}>
          {model?.children?.map((node) =>
            node.leaf ? (
              <TreeLeaf key={node.id} model={node} />
            ) : (
              <TreeNode key={node.id} model={node} />
            )
          )}
        </div>
      ) : null}
    </div>
  );
});
