import * as React from "react";
import { observer } from "mobx-react-lite";

import type { TText } from "../mst";

interface TextProps {
  data: TText;
}

export const Text = observer((props: TextProps) => {
  return <div>{props.data.value}</div>;
});
