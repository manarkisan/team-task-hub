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

  const activeProjectId = useProjectStore((state) => state.activeProjectId);
const setActiveProject = useProjectStore((state) => state.setActiveProject);
const activeProject = projects.find((p) => p.id === activeProjectId);

if (!activeProject) {
  return (
    <Card>
      <CardHeader><CardTitle>Choose a Project</CardTitle></CardHeader>
      <CardContent>
        {projects.length === 0 && <p>No projects yet. Create one from the menu.</p>}
        {projects.map((p) => (
          <button key={p.id} onClick={() => setActiveProject(p.id)}>{p.title}</button>
        ))}
      </CardContent>
    </Card>
  );
}

  return (
    <Card>
      <CardHeader>
        <CardTitle>{activeProject.title}</CardTitle>
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
            <Board project={activeProject} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
