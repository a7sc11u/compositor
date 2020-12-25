import * as React from "react";
import { getMembers, getType, getPath } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import type { TProject } from "../mst";

interface FontsViewComponentProps {
  project: TProject;
}

export const FontsView = observer((props: FontsViewComponentProps) => {
  return <div>{JSON.stringify(props.project.fonts)}</div>;
});
