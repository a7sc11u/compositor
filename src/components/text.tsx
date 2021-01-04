/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { Div } from "./div";
import styled from "@emotion/styled";

import { leadingTrim, LeadingTrimMetrics } from "../lib/leading-trim";

import type { ITextNode, HTMLProps } from "../types";

interface TextProps extends HTMLProps<"p"> {
  model: ITextNode;
}

interface StyledTextProps extends LeadingTrimMetrics {
  familyName: string;
  fontSize: number;
  fontWeight: number;
  fontStyle: string;
}

const StyledText = styled.span<StyledTextProps>`
  display: block;
  font-family: ${(props) => props.familyName};
  font-weight: ${(props) => props.fontWeight};
  font-style: ${(props) => props.fontStyle};
  line-height: ${(props) => props.lineHeight}px;
  font-size: ${(props) => props.fontSize}px;
  padding-top: ${(props) => props.paddingTop}px;
  padding-bottom: ${(props) => props.paddingBottom}px;
  &:before {
    display: block;
    content: "";
    height: 0;
    margin-top: ${(props) => props.trimTop}px;
  }
  &:after {
    display: block;
    content: "";
    height: 0;
    margin-bottom: ${(props) => props.trimBottom}px;
  },
`;

export const Text = observer(
  ({ model, ...rest }: TextProps, ref: React.Ref<any>) => {
    const trimProps = leadingTrim({
      metrics: model.font.metrics,
      fontSize: model.fontSize,
      leading: model.leading,
      baseline: 8,
    });

    return (
      <StyledText
        {...rest}
        ref={ref}
        familyName={model.font.familyName}
        fontWeight={model.fontWeight}
        fontStyle={model.fontStyle}
        {...trimProps}
      >
        {model.value}
      </StyledText>
    );
  },
  { forwardRef: true }
);
