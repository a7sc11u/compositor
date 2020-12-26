import * as React from "react";
import { observer } from "mobx-react-lite";
import { Div } from "./div";
import styled from "styled-components";

import type { HTMLProps } from "../types";
import type { TText } from "../mst";

interface TextProps extends HTMLProps<"p"> {
  data: TText;
}

interface StyledTextProps {
  familyName: string;
  fontSize: string;
  fontWeight: number;
  fontStyle: string;
}

const TextComponent = styled.span<StyledTextProps>`
  font-family: ${(props) => props.familyName};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-style: ${(props) => props.fontStyle};
`;

export const Text = observer(
  ({ data, ...rest }: TextProps, ref: React.Ref<any>) => {
    return (
      <TextComponent
        {...rest}
        as="p"
        ref={ref}
        familyName={data.fontFamily.familyName}
        fontSize={`${data.fontSize}px`}
        fontWeight={data.fontWeight}
        fontStyle={data.fontStyle}
      >
        {data.value}
      </TextComponent>
    );
  },
  { forwardRef: true }
);
