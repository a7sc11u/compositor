import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { setupRootStore, initialState, ProjectProvider } from "./mst";

import { ProjectMain } from "./screens/project-main";
import { ScreenLanding } from "./screens/landing";

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
          <Route path="/">
            <ScreenLanding />
          </Route>
        </Switch>
      </Router>
    </ProjectProvider>
  );
}

export default App;
