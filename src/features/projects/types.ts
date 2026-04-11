import z from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  createdAt: z.string(),
  projectId: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;