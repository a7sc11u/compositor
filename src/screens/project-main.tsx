import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import styled from "@emotion/styled";

import { useProject } from "../mst";

import type { TProject } from "../mst";

import { ProjectEditor } from "./project-editor";
import { ProjectConfig } from "./project-config";

export const Main = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: 32px auto;
  grid-template-areas:
    "header"
    "main";
`;

export const MainHeader = styled.header`
  grid-area: header;
  padding: 8px;
  border-bottom: 3px solid #2a2a2a;
`;

export const MainPane = styled.section`
  grid-area: main;
  position: relative;
  & > * {
    position: absolute;
    inset: 0;
  }
`;

export const ProjectMain = () => {
  const project = useProject();
  const { path } = useRouteMatch();

  if (!project) return null;

  return (
    <Main>
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
