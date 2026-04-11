import * as z from 'zod';

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.enum(['todo', 'doing', 'done']),
  projectId: z.string().optional(),
});

export type Task = z.infer<typeof TaskSchema>;

