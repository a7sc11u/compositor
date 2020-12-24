import * as React from "react";

import type { TPage } from "../mst";
import { Node } from "./node";

interface PageComponentProps {
  page?: TPage;
}

export const PageView = (props: PageComponentProps) => {
  return (
    <article>
      {props.page?.children.map((child) => (
        <Node key={child.id} data={child} />
      ))}
    </article>
  );
};
