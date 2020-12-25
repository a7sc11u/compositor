import * as React from "react";
import styled from "styled-components";

import { useProject } from "../mst";

import { PageView } from "../editor/page-view";
import { TreeView } from "../editor/tree-view";
import { InspectorView } from "../editor/inspector-view";

const StyledEditorView = styled.section`
  display: grid;
  flex: 1;
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

export const ProjectEditor = () => {
  const project = useProject();

  if (!project) return null;

  const page = project.pages[0];

  return (
    <StyledEditorView>
      <LeftPane>
        <TreeView page={page} />
      </LeftPane>
      <PagePane>
        <PageView page={page} />
      </PagePane>
      <RightPane>
        <InspectorView project={project} />
      </RightPane>
    </StyledEditorView>
  );
};
