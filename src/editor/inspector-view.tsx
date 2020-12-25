import * as React from "react";
import { getMembers, getType, getPath } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import type { TProject } from "../mst";

interface InspectorComponentProps {
  project: TProject;
}

export const InspectorView = observer((props: InspectorComponentProps) => {
  if (props.project.editor.selectedNode) {
    const model = getType(props.project.editor.selectedNode);
    const members = getMembers(props.project.editor.selectedNode);
    const path = getPath(props.project.editor.selectedNode);

    console.log(members.properties);
  }
  return <div>{JSON.stringify(props.project.editor.selectedNode)}</div>;
});
