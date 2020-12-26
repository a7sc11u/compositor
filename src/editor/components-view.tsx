import * as React from "react";

import { DragComponent } from "./components/drag-component";

export const ComponentsView = () => {
  return (
    <div>
      <DragComponent type="box" label="Box" />
      <DragComponent type="text" label="Text" />
    </div>
  );
};
