import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { observer } from "mobx-react-lite";

import { useInteractiveNode } from "./use-interactive-node";
import type { TBox, TText } from "../../mst";

import { Text } from "../../components/text";
import { Box } from "../../components/box";

interface NodeProps {
  data: TText | TBox;
}

export const Node = observer(({ data }: NodeProps) => {
  const Component = useMemo(() => {
    let Comp: typeof Text | typeof Box;
    switch (data.type) {
      case "text":
        Comp = Text;
        break;

      default:
        Comp = Box;
    }

    return Comp;
  }, [data]);

  const { events, style, ref } = useInteractiveNode(data);

  return (
    <Component data={data} {...events} ref={ref} style={style}>
      {data?.children
        ? data?.children?.map((child) => <Node key={child.id} data={child} />)
        : null}
    </Component>
  );
});
