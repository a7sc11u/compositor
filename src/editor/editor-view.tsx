import * as React from "react";
import styled from "styled-components";

import { useProject } from "../mst";

import { PageView } from "./page-view";
import { TreeView } from "./tree-view";
import { InspectorView } from "./inspector-view";

const ViewProject = styled.section`
  display: grid;
  height: 100vh;
  grid-template-columns: 230px 1fr 240px;
  grid-template-areas: "left main right";
`;

export const LeftPane = styled.section`
  grid-area: left;
  border-right: 3px solid #2a2a2a;
  flex: 1;
  padding: 8px;
  font-size: 13px;
`;

const PagePane = styled.section`
  grid-area: main;
  position: relative;
  flex: 1;
`;

export const RightPane = styled.section`
  grid-area: right;
  border-left: 3px solid #2a2a2a;
  flex: 1;
  padding: 8px;
  font-size: 13px;
  overflow-wrap: break-word;
`;

export const EditorView = () => {
  const project = useProject();

  if (!project) return null;

  const page = project.pages[0];

  return (
    <ViewProject>
      <LeftPane>
        <TreeView page={page} />
      </LeftPane>
      <PagePane>
        <PageView page={page} />
      </PagePane>
      <RightPane>
        <InspectorView project={project} />
      </RightPane>
    </ViewProject>
  );
};
