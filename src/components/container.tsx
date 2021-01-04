import * as React from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

import type { IContainerNode, HTMLProps } from "../types";

const Div = styled.div`
  user-select: none;
`;
interface ContainerProps extends HTMLProps<"div"> {
  model: IContainerNode;
  children: React.ReactNode;
}

export const Container = observer(
  (
    { children, style, model, ...rest }: ContainerProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Div
        {...rest}
        ref={ref}
        style={{
          ...style,
          maxWidth: "90%",
          width: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "48px",
        }}
      >
        {children}
      </Div>
    );
  },
  { forwardRef: true }
);
