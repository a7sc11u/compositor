import * as React from "react";
import { getMembers, getType, getPath } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import type { TProject } from "../mst";

interface OwnComponentProps {
  project: TProject;
}

export const TextStylesView = observer((props: OwnComponentProps) => {
  return <div>Text Styles</div>;
});
