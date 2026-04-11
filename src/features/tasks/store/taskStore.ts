import { create } from 'zustand'
import { TaskSchema, type Task } from '../types';
import { loadFromStorage, saveToStorage } from '@/features/storage/storage';

const STORAGE_KEY = "tasks";

const initialTasks = loadFromStorage<Task>(
  STORAGE_KEY,
  TaskSchema
);

interface TaskState {
    tasks: Task[],
    addTask: (task: Task) => void,
    updateTask: (taskId: string, updates: Partial<Task>) => void,
    removeTask: (taskId: string) => void,
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: initialTasks,

  addTask: (task) =>
    set((state) => {
      const updated = [...state.tasks, task];
      saveToStorage(STORAGE_KEY, updated);
      return { tasks: updated };
    }),

  updateTask: (id, updates) =>
    set((state) => {
      const updated = state.tasks.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      );
      saveToStorage(STORAGE_KEY, updated);
      return { tasks: updated };
    }),

  removeTask: (id) =>
    set((state) => {
      const updated = state.tasks.filter((t) => t.id !== id);
      saveToStorage(STORAGE_KEY, updated);
      return { tasks: updated };
    }),
}));