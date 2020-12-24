import React from "react";
import { Provider } from "mobx-react";

import { setupRootStore, initialState } from "./mst";
import { ProjectMain } from "./components/project-main";

import "./App.css";

function App() {
  const project = setupRootStore(initialState);

  return (
    <Provider project={project}>
      <ProjectMain />
    </Provider>
  );
}

export default App;
