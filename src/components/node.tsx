import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";

import type { TBox, TText } from "../mst";

import { Text } from "./text";
import { Box } from "./box";

interface NodeProps {
  data: TText | TBox;
}

export const Node = observer((props: NodeProps) => {
  const Comp = useMemo(() => {
    switch (props.data.type) {
      case "text":
        return Text;
        break;

      default:
        return Box;
    }
  }, [props.data]);

  return (
    <div>
      <Comp data={props.data}>
        {props.data?.children
          ? props.data?.children?.map((child) => (
              <Node key={child.id} data={child} />
            ))
          : null}
      </Comp>
    </div>
  );
});
