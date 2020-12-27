import React, {  useMemo } from "react";
import { observer } from "mobx-react-lite";

import { useDropNode } from "../use-drop-node";
import { useInteractiveNode } from "../use-interactive-node";

import { Box } from "../../components/box";

import {Leaf} from './leaf';

export const Node = observer((props) => {
  const { model } = props;
  const Component = useMemo(() => {
    let Comp
    switch (model.type) {
     
      default:
        Comp = Box;
    }

    return Comp;
  }, [model]);

  const { drop, isOver } = useDropNode({node: model});
  const { events, style, ref } = useInteractiveNode({node: model, isOver});

  return (
    <Component model={model} {...events} ref={drop(ref)} style={style}>
      {model?.children
        ? model?.children?.map((node) => node.leaf ? (
          <Leaf key={node.id} model={node} />
        ) : (
          <Node key={node.id} model={node} />
        )): null}
    </Component>
  );
});
