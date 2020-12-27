import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { observer } from "mobx-react-lite";

import { useDropNode } from "../use-drop-node";
import { useInteractiveNode } from "../use-interactive-node";

import { Text } from "../../components/text";
import { Box } from "../../components/box";


export const Node = observer((props) => {
  const { data } = props;
  const Component = useMemo(() => {
    let Comp
    switch (data.type) {
      case "text":
        Comp = Text;
        break;

      default:
        Comp = Box;
    }

    return Comp;
  }, [data]);

  const { drop, isOver } = useDropNode(["text", "box"], true);
  const { events, style, ref } = useInteractiveNode(data);

  return (
    <Component data={data} {...events} ref={drop(ref)} style={style}>
      {data?.children
        ? data?.children?.map((child) => <Node key={child.id} data={child} />)
        : null}
    </Component>
  );
});
