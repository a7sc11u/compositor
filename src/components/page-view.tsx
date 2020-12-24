import * as React from "react";
import { inject, observer } from "mobx-react";
import { useParams } from "react-router-dom";

import type { TPage } from "../mst";
import { Node } from "./node";

interface PageComponentProps {
  page?: TPage;
}

export const PageViewMain = (props: PageComponentProps) => {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      {props.page?.children.map((child) => (
        <Node data={child} />
      ))}
    </div>
  );
};

export const PageView = inject("project")(observer(PageViewMain));
