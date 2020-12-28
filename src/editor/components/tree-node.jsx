import React from "react";
import { observer } from "mobx-react-lite";

import { TreeLeaf } from "./tree-leaf";

import { useInteractiveNode } from "../use-interactive-node";
import { useDropNode } from "../use-drop-node";
import { useNodeStyles } from "../use-node-styles";

export const TreeNode = observer((props) => {
  const { model } = props;

  const { drop, isOver } = useDropNode({
    node: model,
    accept: ["new", "tree"],
  });

  const { events, ref } = useInteractiveNode({
    node: model,
    type: "tree",
    isOver,
  });

  const { style } = useNodeStyles({ node: model });

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
