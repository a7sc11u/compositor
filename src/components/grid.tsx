import * as React from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

import type { IGridNode, HTMLProps } from "../types";

const Div = styled.div`
  user-select: none;
`;
interface GridProps extends HTMLProps<"div"> {
  model: IGridNode;
  children: React.ReactNode;
}

export const Grid = observer(
  ({ children, style, model, ...rest }: GridProps, ref: React.Ref<any>) => {
    return (
      <Div
        {...rest}
        ref={ref}
        style={{
          ...style,
          display: "grid",
          width: "100%",
          gap: model.gap,
          gridTemplateColumns: `repeat(${model.columns}, minmax(auto, 1fr)`,
        }}
      >
        {children}
      </Div>
    );
  },
  { forwardRef: true }
);
