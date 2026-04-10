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

export type ProjectBoard = {
  name: string;
  projects: Project[];
  status: string;
  id: string;
  description?: string | undefined;
}

export default function ProjectsArea({ board } : { board: ProjectBoard}) {
  const { name: boardName, projects } = board;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{boardName}</CardTitle>
        <CardDescription>sdfasdf</CardDescription>
        <CardAction>
          <DialogNewTask />
        </CardAction>
      </CardHeader>
      <CardContent>
        <div>
          {projects.map((project) => (
            <Board key={project.id} project={project} />
          ))}
        </div>
       
      </CardContent>
    </Card>
  );
}
