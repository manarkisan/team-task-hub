import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { useProjectStore } from "@/features/projects/store/projectStore";

export default function Dashboard() {
  const projects = useProjectStore((state) => state.projects);
  const setActiveProject = useProjectStore((state) => state.setActiveProject);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-lg font-medium">Your Projects</h2>
      {projects.length === 0 && <p className="text-muted-foreground">No projects yet. Create one from the menu.</p>}
      <div className="flex flex-wrap gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer hover:ring-2 w-64"
            onClick={() => setActiveProject(project.id)}
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}