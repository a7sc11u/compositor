import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { setupRootStore, initialState, ProjectProvider } from "./mst";
import { ProjectMain } from "./components/project-main";

import "./App.css";

const project = setupRootStore(initialState);

function App() {
  return (
    <ProjectProvider value={project}>
      <Router>
        <Switch>
          <Route path="/project">
            <ProjectMain />
          </Route>
        </Switch>
      </Router>
    </ProjectProvider>
  );
}

export default App;
