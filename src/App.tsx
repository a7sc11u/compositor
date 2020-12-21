import React from "react";
import { Provider } from "mobx-react";

import { setupRootStore, initialState } from "./mst";
import { ProjectComponent } from "./components/Project";

import "./App.css";

function App() {
  const project = setupRootStore(initialState);

  return (
    <Provider project={project}>
      <div className="App">
        <header className="App-header">Hey</header>
        <ProjectComponent />
      </div>
    </Provider>
  );
}

export default App;
