/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { Div } from "./div";
import styled from "@emotion/styled";

import type { ITextNode, HTMLProps } from "../types";

interface TextProps extends HTMLProps<"p"> {
  model: ITextNode;
}

interface StyledTextProps {
  familyName: string;
  fontSize: string;
  fontWeight: number;
  fontStyle: string;
}

const StyledText = styled.span<StyledTextProps>`
  font-family: ${(props) => props.familyName};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-style: ${(props) => props.fontStyle};
`;

export const Text = observer(
  ({ model, ...rest }: TextProps, ref: React.Ref<any>) => {
    return (
      <StyledText
        {...rest}
        as="p"
        ref={ref}
        familyName={model.font.familyName}
        fontSize={`${model.fontSize}px`}
        fontWeight={model.fontWeight}
        fontStyle={model.fontStyle}
      >
        {model.value}
      </StyledText>
    );
  },
  { forwardRef: true }
);
