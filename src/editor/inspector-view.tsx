import * as React from "react";
import { observer } from "mobx-react-lite";
import type { IProject } from "src/types";

interface InspectorComponentProps {
  project: IProject;
}

export const InspectorView = observer((props: InspectorComponentProps) => {
  if (props.project.editor.selectedNode) {
    // const model = getType(props.project.editor.selectedNode);
    // const members = getMembers(props.project.editor.selectedNode);
    // const path = getPath(props.project.editor.selectedNode);
    // console.log(members.properties);
  }
  if (!props.project.editor.selectedNode) return null;
  return <div>{JSON.stringify(props.project.editor.selectedNode)}</div>;
});
