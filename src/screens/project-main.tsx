import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Link } from "react-router-dom";

import styled from "styled-components";

import { useProject } from "../mst";

import type { TProject } from "../mst";

import { EditorView } from "../editor/editor-view";
import { ConfigView } from "../editor/config-view";

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
`;

interface ProjectComponentProps {
  project?: TProject;
}

export const ProjectMain = (props: ProjectComponentProps) => {
  const project = useProject();
  const { path } = useRouteMatch();

  if (!project) return null;

  return (
    <Main onClick={() => project.editor.clearSelectedNode()}>
      <MainHeader>
        <Link to={`${path}/config`}>Config</Link> &nbsp;&nbsp; | &nbsp; &nbsp;
        <Link to={`${path}/page`}>Page</Link>
      </MainHeader>
      <MainPane aria-label="Main Pane">
        <Switch>
          <Route path={`${path}/page`} exact={false}>
            <EditorView />
          </Route>
          <Route path={`${path}/config`} exact={false}>
            <ConfigView />
          </Route>
        </Switch>
      </MainPane>
    </Main>
  );
};

{
  /* */
}
