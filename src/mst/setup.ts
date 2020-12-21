import { ProjectModel } from "./index";

export const setupRootStore = (initialState) =>
  ProjectModel.create(initialState);
