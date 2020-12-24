import React from "react";
import { inject, observer } from "mobx-react";
import type { TProject } from "../mst";

import { Main, MainHeader, MainPane } from "./layout";

import { PageView } from "./page-view";

interface ProjectComponentProps {
  project?: TProject;
}

export const ProjectMainView = (props: ProjectComponentProps) => {
  if (!props.project) return null;

  const page = props.project.pages[0];
  return (
    <Main>
      <MainHeader />
      <MainPane aria-label="Main Pane">
        <PageView page={page} />
      </MainPane>
    </Main>
  );
};

export const ProjectMain = inject("project")(observer(ProjectMainView));
