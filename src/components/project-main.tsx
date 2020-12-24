import React from "react";
import { inject, observer } from "mobx-react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import type { TProject } from "../mst";

import { Main, MainHeader, MainPane } from "./layout";

import { PageView } from "./page-view";

interface ProjectComponentProps {
  project?: TProject;
}

export const ProjectMainView = (props: ProjectComponentProps) => {
  if (!props.project) return null;

  const { path } = useRouteMatch();
  const page = props.project.pages[0];

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

export const ProjectMain = inject("project")(observer(ProjectMainView));
