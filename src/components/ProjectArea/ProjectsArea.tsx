import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Board from "../Board/Boards";
import DialogNewTask from "../DialogWindows/DialogNewTask";
import type { Project } from "@/features/projects/types";
import { useProjectStore } from "@/features/projects/store/projectStore";
import { Button } from "../ui/button";
import Dashboard from "../Board/Dashboard";
import { useTaskStore } from "@/features/tasks/store/taskStore";
import ProgressBar from "../ProgressBar/ProgressBar";

export type ProjectBoard = {
  title: string;
  projects: Project[];
  status: string;
  id: string;
  description?: string | undefined;
};

export default function ProjectsArea() {
  const projects = useProjectStore((state) => state.projects);
  const removeProject = useProjectStore((state) => state.removeProject);
  const activeProjectId = useProjectStore((state) => state.activeProjectId);
  const activeProject = projects.find((p) => p.id === activeProjectId);

  const allTasks = useTaskStore((state) => state.tasks ?? []);

const tasks = activeProject
  ? allTasks.filter((t) => t.projectId === activeProject.id)
  : [];
  const done = tasks.filter((t) => t.status === 'done').length;
  const percentage = tasks.length === 0 ? 0 : Math.round((done / tasks.length) * 100);

  if (!activeProject) return <Dashboard />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{activeProject.title}</CardTitle>
        <CardDescription>{activeProject.description}</CardDescription>
        <CardAction>
          <ProgressBar percentage={percentage} />
          <DialogNewTask project={activeProject} />
          <Button onClick={() => removeProject(activeProject.id)}>Delete Project</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Board project={activeProject} />
      </CardContent>
    </Card>
  );
}
