import * as React from "react";
import { observer } from "mobx-react-lite";

import type { TProject } from "../mst";

interface InspectorComponentProps {
  project: TProject;
}

export const InspectorView = observer((props: InspectorComponentProps) => {
  return <div>{JSON.stringify(props.project.editor.selectedNode)}</div>;
});
