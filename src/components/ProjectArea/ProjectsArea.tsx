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

export type ProjectBoard = {
  name: string;
  projects: Project[];
  status: string;
  id: string;
  description?: string | undefined;
};

export default function ProjectsArea() {
  const projects = useProjectStore((state) => state.projects);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>sdfasdf</CardDescription>
        <CardAction>
          <DialogNewTask />
        </CardAction>
      </CardHeader>
      <CardContent>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <Board project={project} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
