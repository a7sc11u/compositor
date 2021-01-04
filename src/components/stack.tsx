import * as React from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

import type { IStackNode, HTMLProps } from "../types";

const Div = styled.div`
  user-select: none;
`;
interface StackProps extends HTMLProps<"div"> {
  model: IStackNode;
  children: React.ReactNode;
}

export const Stack = observer(
  ({ children, style, model, ...rest }: StackProps, ref: React.Ref<any>) => {
    return (
      <Div
        {...rest}
        ref={ref}
        style={{
          ...style,
          backgroundColor: model.bg?.hex,
          color: model.color?.hex,
          gap: model.gap,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Div>
    );
  },
  { forwardRef: true }
);
