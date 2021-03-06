import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";

import { useDropNode } from "../use-drop-node";
import { useInteractiveNode } from "../use-interactive-node";
import { useNodeStyles } from "../use-node-styles";

import { Box } from "../../components/box";
import { Stack } from "../../components/stack";
import { Grid } from "../../components/grid";
import { Container } from "../../components/container";

import { Leaf } from "./leaf";

export const Node = observer((props) => {
  const { model } = props;
  const Component = useMemo(() => {
    let Comp;
    switch (model.type) {
      case "stack":
        Comp = Stack;
        break;
      case "grid":
        Comp = Grid;
        break;
      case "container":
        Comp = Container;
        break;

      default:
        Comp = Box;
    }

    return Comp;
  }, [model]);

  const { drop } = useDropNode({
    node: model,
    accept: ["new", "node"],
  });
  const { events, ref } = useInteractiveNode({
    node: model,
    type: "node",
  });

  const { style } = useNodeStyles({ node: model });

  return (
    <Component model={model} {...events} ref={drop(ref)} style={style}>
      {model?.children
        ? model?.children?.map((node) =>
            node.leaf ? (
              <Leaf key={node.id} model={node} />
            ) : (
              <Node key={node.id} model={node} />
            )
          )
        : null}
    </Component>
  );
});
