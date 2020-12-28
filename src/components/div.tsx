import { forwardRefWithAs } from "@radix-ui/react-polymorphic";
import { observer } from "mobx-react-lite";
import * as React from "react";
import styled from "@emotion/styled";

import type { HTMLProps } from "../types";

const StyledDiv = styled.div`
  user-select: none;
`;
interface DivProps extends HTMLProps<"div"> {
  children: React.ReactNode;
}

const DIV_TAG = "div";

export const Div = forwardRefWithAs<typeof DIV_TAG, DivProps>(
  ({ as = DIV_TAG, children, ...rest }: DivProps, ref) => {
    return (
      <StyledDiv as={as} {...rest} ref={ref}>
        {children}
      </StyledDiv>
    );
  }
);
