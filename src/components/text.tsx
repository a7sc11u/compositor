import * as React from "react";
import type { TText } from "../mst";

interface TextProps {
  data: TText;
  children?: React.ReactNode;
}

export const Text = (props: TextProps) => {
  return (
    <div>
      {JSON.stringify(props)}
      {props.children}
    </div>
  );
};
