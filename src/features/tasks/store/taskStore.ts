import { create } from 'zustand'

interface TaskState {
    tasks: SingleTask[];
    addTask: (product: Product) => void;
    updateTask: (productId: string, quantity: number) => void;
    removeTask: (productId: string) => void;
}

const taskStore = create<>((set) =>({
    tasks: [],
    addTask: (task) =>
        set((state) => {
            const existing = state.tasks.find((t) => t.product.id === product.id);
      if (existing) {
        return {
          items: state.tasks.map((t) =>
            t.product.id === product.id
              ? { ...t, quantity: t.quantity + 1 }
              : t,
          ),
        };
      }
      return { tasks: [...state.tasks, { product, quantity: 1 }] };
        }),
         updateTask: (productId, quantity) =>
    set((state) => ({
      tasks: state.tasks
        .map((t) => (t.product.id === productId ? { ...t, quantity } : t))
        .filter((t) => t.quantity > 0),
    })),
  removeItem: (productId) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.product.id !== productId),
    })),
}))