import * as React from "react";
import { getMembers, getType, getPath } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import type { IProject } from "../types";

interface OwnComponentProps {
  project: IProject;
}

export const TextStylesView = observer((props: OwnComponentProps) => {
  return <div>Text Styles</div>;
});
