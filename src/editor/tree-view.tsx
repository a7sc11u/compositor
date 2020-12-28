import * as React from "react";
import { observer } from "mobx-react-lite";

import type { TPage } from "../mst";
import { useDropNode } from "./use-drop-node";
import { TreeNode } from "./components/tree-node";
import { TreeLeaf } from "./components/tree-leaf";
import styled from "@emotion/styled";

interface TreeComponentProps {
  page: TPage;
}

interface StyledPageProps {
  isOver: boolean;
}

const StyledPage = styled.div<StyledPageProps>`
  flex: 1;
  padding: 8px 0;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    box-shadow: ${(props) =>
      props.isOver ? `#0000ff 0px 0px 0px 2px inset` : "none"};
  }
`;

export const TreeView = observer((props: TreeComponentProps) => {
  const { isOver, drop } = useDropNode({
    node: props.page,
    accept: ["new", "tree"],
  });

  return (
    <StyledPage ref={drop} isOver={props.page.state.drop}>
      <h4 style={{ paddingLeft: "8px" }}>{props.page.title}</h4>

      {props.page.children.map((node) =>
        node.leaf ? (
          <TreeLeaf key={node.id} model={node} />
        ) : (
          <TreeNode key={node.id} model={node} />
        )
      )}
    </StyledPage>
  );
});
