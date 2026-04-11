import { create } from "zustand";
import { ProjectSchema, type Project } from "@/features/projects/types";
import { loadFromStorage, saveToStorage } from "@/features/storage/storage";

const STORAGE_KEY = "projects";
const initialProjects = loadFromStorage<Project>(STORAGE_KEY, ProjectSchema);

interface ProjectState {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (projectId: string, updates: Partial<Project>) => void;
  removeProject: (projectId: string) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: initialProjects,
  addProject: (project) =>
    set((state) => {
      const updated = [...state.projects, project];
      saveToStorage(STORAGE_KEY, updated);
      return { projects: updated };
    }),
    
  updateProject: (id, updates) =>
    set((state) => {
      const updated = state.projects.map((p) =>
        p.id === id ? { ...p, ...updates } : p,
      );
      saveToStorage(STORAGE_KEY, updated);
      return { projects: updated };
    }),

  removeProject: (id) =>
    set((state) => {
      const updated = state.projects.filter((p) => p.id !== id);
      saveToStorage(STORAGE_KEY, updated);
      return { projects: updated };
    }),
}));
