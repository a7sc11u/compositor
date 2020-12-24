import * as React from "react";
import { inject, observer } from "mobx-react";
import { useParams } from "react-router-dom";

import type { TPage } from "../mst";
import { Node } from "./node";

interface PageComponentProps {
  page?: TPage;
}

export const PageViewMain = (props: PageComponentProps) => {
  return (
    <article>
      {props.page?.children.map((child) => (
        <Node key={child.id} data={child} />
      ))}
    </article>
  );
};

export const PageView = inject("project")(observer(PageViewMain));
