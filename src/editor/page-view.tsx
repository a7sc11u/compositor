import React from "react";
import { observer } from "mobx-react-lite";

import type { IPage } from "../types";

import { Node } from "./components/node";
import { Leaf } from "./components/leaf";

import { useDropNode } from "./use-drop-node";
import styled from "@emotion/styled";

interface PageComponentProps {
  page: IPage;
}

interface StyledPageProps {
  isOver: boolean;
}

const StyledPage = styled.article<StyledPageProps>`
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

export const PageView = observer((props: PageComponentProps) => {
  const { drop } = useDropNode({
    node: props.page,
    accept: ["new", "node"],
  });

  return (
    <StyledPage ref={drop} isOver={props.page.state.drop}>
      {props.page.children.map((node) =>
        node.leaf ? (
          <Leaf key={node.id} model={node} />
        ) : (
          <Node key={node.id} model={node} />
        )
      )}
    </StyledPage>
  );
});
