import * as React from "react";

import { DragComponent } from "./components/drag-component";

export const ComponentsView = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DragComponent type="container" label="Container" />
      <DragComponent type="grid" label="Grid" />
      <DragComponent type="stack" label="Stack" />
      <DragComponent type="box" label="Box" />
      <DragComponent type="text" label="Text" />
    </div>
  );
};
