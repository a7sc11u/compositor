import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { useProject } from "../mst";

import type { TProject } from "../mst";

import { Main, MainHeader, MainPane, SidePane } from "./layout";

import { PageView } from "./page-view";
import { TreeView } from "./tree-view";
import { ConfigView } from "./config-view";

interface ProjectComponentProps {
  project?: TProject;
}

export const ProjectMain = (props: ProjectComponentProps) => {
  const project = useProject();

  if (!project) return null;

  const { path } = useRouteMatch();
  const page = project.pages[0];

  return (
    <Main>
      <MainHeader />
      <SidePane>
        <TreeView page={page} />
      </SidePane>
      <MainPane aria-label="Main Pane">
        <Switch>
          <Route path={`${path}/page`} exact={false}>
            <PageView page={page} />
          </Route>
          <Route path={`${path}/config`} exact={false}>
            <ConfigView />
          </Route>
        </Switch>
      </MainPane>
    </Main>
  );
};
