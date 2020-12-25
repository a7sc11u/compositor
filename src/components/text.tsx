import * as React from "react";
import { observer } from "mobx-react-lite";
import { Div } from "../ui";

import type { HTMLProps } from "../types";

import type { TText } from "../mst";

interface TextProps extends HTMLProps<"p"> {
  data: TText;
}

export const Text = observer(
  ({ data, ...rest }: TextProps, ref: React.Ref<any>) => {
    return (
      <Div {...rest} as="p" ref={ref}>
        {data.value}
      </Div>
    );
  },
  { forwardRef: true }
);
