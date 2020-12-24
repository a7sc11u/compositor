import * as React from "react";
import { inject, observer } from "mobx-react";
import type { TPage } from "../mst";

import { Node } from "./node";

interface PageComponentProps {
  page?: TPage;
}

export const PageView = (props: PageComponentProps) => {
  return (
    <div>
      {props.page?.children.map((child) => (
        <Node data={child} />
      ))}
    </div>
  );
};
