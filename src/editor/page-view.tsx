import * as React from "react";
import { observer } from "mobx-react-lite";

import type { TPage } from "../mst";
import { Node } from "../components/node";

interface PageComponentProps {
  page?: TPage;
}

export const PageView = observer((props: PageComponentProps) => {
  return (
    <article>
      {props.page?.children.map((child) => (
        <Node key={child.id} data={child} />
      ))}
    </article>
  );
});
