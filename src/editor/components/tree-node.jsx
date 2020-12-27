import React from "react";
import { observer } from "mobx-react-lite";
import { useInteractiveNode } from "../use-interactive-node";
import { TreeLeaf } from './tree-leaf';

export const TreeNode = observer((props) => {
  const { events, ref } = useInteractiveNode({node: props.model, type:"tree"});
  const { model } = props;

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
      {model?.children
        ? model?.children?.map((node) => node.leaf ? (
          <TreeLeaf key={node.id} model={node} />
        ) : (
          <TreeNode key={node.id} model={node} />
        )): null}
    </div>
  );
});
