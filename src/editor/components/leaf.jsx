import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { observer } from "mobx-react-lite";

import { useInteractiveNode } from "../use-interactive-node";

import { Text } from "../../components/text";


export const Leaf = observer((props) => {
  const { model } = props;

  const { events, style, ref } = useInteractiveNode({node: model});

  return (
    <Text model={model} {...events} ref={ref} style={style}>
      {model?.children
        ? model?.children?.map((node) => <Node key={node.id} model={node} />)
        : null}
    </Text>
  );
});
