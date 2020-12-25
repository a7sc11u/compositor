import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import styled from "styled-components";

import { useProject } from "../mst";

import type { TProject } from "../mst";

import { ProjectEditor } from "./project-editor";
import { ProjectConfig } from "./project-config";

export const Main = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: 32px 1fr;
  grid-template-areas:
    "header"
    "main";
`;

export const MainHeader = styled.header`
  grid-area: header;
  padding: 8px;
  border-bottom: 3px solid #2a2a2a;
  font-size: 13px;
`;

export const MainPane = styled.div`
  grid-area: main;
  display: flex;
`;

export const ProjectMain = () => {
  const project = useProject();
  const { path } = useRouteMatch();

  if (!project) return null;

  return (
    <Main onClick={() => project.editor.clearSelectedNode()}>
      <MainHeader>
        <Link to={`${path}/config`}>Config</Link> &nbsp;&nbsp; | &nbsp; &nbsp;
        <Link to={`${path}/editor`}>Editor</Link>
      </MainHeader>
      <MainPane aria-label="Main Pane">
        <Switch>
          <Route path={`${path}/editor`} exact={false}>
            <ProjectEditor />
          </Route>
          <Route path={`${path}/config`} exact={false}>
            <ProjectConfig />
          </Route>
        </Switch>
      </MainPane>
    </Main>
  );
};

{
  /* */
}
