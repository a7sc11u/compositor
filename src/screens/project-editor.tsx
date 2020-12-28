import * as React from "react";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useProject } from "../mst";

import { PageView } from "../editor/page-view";
import { TreeView } from "../editor/tree-view";
import { InspectorView } from "../editor/inspector-view";
import { ComponentsView } from "../editor/components-view";

const StyledEditorView = styled.section`
  display: grid;
  flex: 1;
  grid-template-columns: 230px 1fr 240px;
  grid-template-areas: "left main right";
`;

export const LeftPane = styled.section`
  grid-area: left;
  display: grid;
  border-right: 3px solid #2a2a2a;
  flex: 1;
  grid-template-colums: 1fr;
  grid-template-rows: 1fr 1ft;
  grid-template-areas: "top" "bottom";
`;

const LeftPaneTree = styled.section`
  grid-area: top;
  padding: 8px 0;
  border-bottom: 3px solid #2a2a2a;
  display: flex;
`;

const LeftPaneComponents = styled.section`
  grid-area: bottom;
  padding: 8px;
`;

const PagePane = styled.section`
  grid-area: main;
  position: relative;
  flex: 1;
  display: flex;
  > * {
    flex: 1;
    width: 100%;
  }
`;

export const RightPane = styled.section`
  grid-area: right;
  border-left: 3px solid #2a2a2a;
  flex: 1;
  padding: 8px;
  overflow-wrap: break-word;
`;

export const ProjectEditor = () => {
  const project = useProject();

  if (!project) return null;

  const page = project.pages[0];

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledEditorView>
        <LeftPane>
          <LeftPaneTree>
            <TreeView page={page} />
          </LeftPaneTree>
          <LeftPaneComponents>
            <ComponentsView />
          </LeftPaneComponents>
        </LeftPane>
        <PagePane>
          <PageView page={page} />
        </PagePane>
        <RightPane>
          <InspectorView project={project} />
        </RightPane>
      </StyledEditorView>
    </DndProvider>
  );
};
