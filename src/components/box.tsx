import * as React from "react";
import type { TBox } from "../mst";

interface BoxProps {
  data: TBox;
  children: React.ReactNode;
}

export const Box = (props: BoxProps) => {
  return (
    <div style={{ color: props.data.color.hex, padding: "20px" }}>
      {props.children}
    </div>
  );
};
