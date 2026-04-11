import z from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  createdAt: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;