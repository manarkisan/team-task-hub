import { create } from 'zustand'
import type { Project } from '@/features/projects/types';

interface ProjectState {
    projects: Project[];
    addProject: (project: Project) => void;
    updateProject: (projectId: string, updates: Partial<Project>) => void;
    removeProject: (projectId: string) => void;
}

export const useProjectStore = create<ProjectState>((set) =>({
    projects: [],
    addProject: (project) =>
        set((state) => ({ projects: [...state.projects, project] })),
         updateProject: (projectId, updates) =>
    set((state) => ({
      projects: state.projects
        .map((p) => (p.id === projectId ? { ...p, ...updates } : p))
    })),
  removeProject: (projectId) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== projectId),
    })),
}))