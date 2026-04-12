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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>sdfasdf</CardDescription>
        <CardAction>
         
        </CardAction>
      </CardHeader>
      <CardContent>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
             <DialogNewTask project={project} />
             <Button onClick={() => removeProject(project.id)}>Delete Project</Button>
            <Board project={project} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
