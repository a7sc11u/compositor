import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { useProject } from "../mst";

import type { TProject } from "../mst";

import { Main, MainHeader, MainPane } from "./layout";

import { PageView } from "./page-view";

interface ProjectComponentProps {
  project?: TProject;
}

export const ProjectMain = (props: ProjectComponentProps) => {
  const project = useProject();

  console.log(project);

  if (!project) return null;

  const { path } = useRouteMatch();
  const page = project.pages[0];

  return (
    <Main>
      <MainHeader />
      <MainPane aria-label="Main Pane">
        <Switch>
          <Route path={`${path}/page`} exact={false}>
            <PageView page={page} />
          </Route>
        </Switch>
      </MainPane>
    </Main>
  );
};
