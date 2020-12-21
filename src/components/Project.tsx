import * as React from "react";
import { inject, observer } from "mobx-react";
import type { TProject } from "../mst";

interface ProjectComponentProps {
  project?: TProject;
}

const ProjectComponentView = (props: ProjectComponentProps) => {
  console.log(props.project);
  return <div>{JSON.stringify(props.project)}</div>;
};

export const ProjectComponent = inject("project")(
  observer(ProjectComponentView)
);
