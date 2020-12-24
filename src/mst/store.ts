import { createContext, useContext } from "react";

import { ProjectModel, TProject } from "./models";

export const setupRootStore = (initialState) =>
  ProjectModel.create(initialState);

const ProjectContext = createContext<TProject>({} as TProject);

export const useProject = (): TProject => useContext(ProjectContext);

export const ProjectProvider = ProjectContext.Provider;
