import React from "react";
import { observer } from "mobx-react-lite";
import { useInteractiveNode } from "../use-interactive-node";

export const TreeLeaf = observer((props) => {
  const { model } = props;
  const { events, ref } = useInteractiveNode({node: model, type:"tree"});

  return (
    <div
      style={{
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
