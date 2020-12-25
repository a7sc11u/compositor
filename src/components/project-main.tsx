import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { useProject } from "../mst";

import type { TProject } from "../mst";

import { Main, MainHeader, MainPane, LeftPane, RightPane } from "./layout";

import { PageView } from "./page-view";
import { TreeView } from "./tree-view";
import { ConfigView } from "./config-view";
import { InspectorView } from "./inspector-view";

interface ProjectComponentProps {
  project?: TProject;
}

export const ProjectMain = (props: ProjectComponentProps) => {
  const project = useProject();

  if (!project) return null;

  const { path } = useRouteMatch();
  const page = project.pages[0];

  return (
    <Main onClick={() => project.editor.clearSelectedNode()}>
      <MainHeader>Type Space Color</MainHeader>
      <LeftPane>
        <TreeView page={page} />
      </LeftPane>
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
      <RightPane>
        <InspectorView project={project} />
      </RightPane>
    </Main>
  );
};
