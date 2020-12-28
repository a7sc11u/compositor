import React from "react";
import { observer } from "mobx-react-lite";

import { useInteractiveNode } from "../use-interactive-node";
import { useNodeStyles } from "../use-node-styles";

export const TreeLeaf = observer((props) => {
  const { model } = props;
  const { events, ref } = useInteractiveNode({ node: model, type: "tree" });

  const { style } = useNodeStyles({ node: model });

  return (
    <div
      style={{
        ...style,
        paddingBottom: "4px",
        userSelect: "none",
        backgroundColor: model.state.hover ? "#e5e5e5" : "transparent",
      }}
      ref={ref}
      {...events}
    >
      {model.name || model.type}
    </div>
  );
});
