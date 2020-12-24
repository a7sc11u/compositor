import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { setupRootStore, initialState } from "./mst";
import { ProjectMain } from "./components/project-main";

import "./App.css";

function App() {
  const project = setupRootStore(initialState);

  return (
    <Provider project={project}>
      <Router>
        <Switch>
          <Route path="/project">
            <ProjectMain />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
