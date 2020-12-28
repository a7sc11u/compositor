import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { observer } from "mobx-react-lite";

import { useInteractiveNode } from "../use-interactive-node";
import { useNodeStyles } from "../use-node-styles";

import { Text } from "../../components/text";

export const Leaf = observer((props) => {
  const { model } = props;

  const { events, ref } = useInteractiveNode({
    node: model,
    type: "node",
  });

  const { style } = useNodeStyles({ node: model });

  const Component = useMemo(() => {
    let Comp;
    switch (model.type) {
      default:
        Comp = Text;
    }

    return Comp;
  }, [model]);

  return <Component model={model} {...events} ref={ref} style={style} />;
});
