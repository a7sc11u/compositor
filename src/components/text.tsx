import * as React from "react";
import type { TText } from "../mst";

interface TextProps {
  data: TText;
}

export const Text = (props: TextProps) => {
  return <div>{props.data.value}</div>;
};
