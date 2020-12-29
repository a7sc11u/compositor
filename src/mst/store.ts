import { createContext, useContext } from "react";

import type { IProject } from "../types";
import { ProjectModel } from "./models";

export const setupRootStore = (initialState) =>
  ProjectModel.create(initialState);

const ProjectContext = createContext<IProject>({} as IProject);

export const useProject = (): IProject => useContext(ProjectContext);

export const ProjectProvider = ProjectContext.Provider;
