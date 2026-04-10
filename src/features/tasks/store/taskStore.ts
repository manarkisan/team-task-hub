import { create } from 'zustand'
import type { Task } from '../types';

interface TaskState {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (taskId: string, updates: Partial<Task>) => void;
    removeTask: (taskId: string) => void;
}

export const useTaskStore = create<TaskState>((set) =>({
    tasks: [],
    addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
         updateTask: (taskId, updates) =>
    set((state) => ({
      tasks: state.tasks
        .map((t) => (t.id === taskId ? { ...t, ...updates } : t))
    })),
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== taskId),
    })),
}))