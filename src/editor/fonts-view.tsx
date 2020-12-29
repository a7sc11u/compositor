import * as React from "react";
import { getMembers, getType, getPath } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import type { IProject } from "../types";

interface FontsViewComponentProps {
  project: IProject;
}

export const FontsView = observer((props: FontsViewComponentProps) => {
  return <div>{JSON.stringify(props.project.fonts)}</div>;
});
