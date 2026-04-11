import { ProjectSchema } from "@/features/projects/types";
import { TaskSchema } from "@/features/tasks/types";

export function loadFromStorage<T>(
  key: string,
  schema: any
): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => schema.safeParse(item))
      .filter((res) => res.success)
      .map((res) => res.data);
  } catch {
    return [];
  }
}

export function saveToStorage(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}