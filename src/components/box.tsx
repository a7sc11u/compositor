import * as React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import type { HTMLProps } from "../types";

import type { TBox } from "../mst";

const Div = styled.div`
  user-select: none;
`;
interface BoxProps extends HTMLProps<"div"> {
  model: TBox;
  children: React.ReactNode;
}

export const Box = observer(
  ({ children, style, model, ...rest }: BoxProps, ref: React.Ref<any>) => {
    return (
      <Div
        {...rest}
        ref={ref}
        style={{
          ...style,
          backgroundColor: model.bg?.hex,
          color: model.color?.hex,
          padding: "16px",
        }}
      >
        {children}
      </Div>
    );
  },
  { forwardRef: true }
);
