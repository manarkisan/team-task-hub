import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DropDownMenu from "../DropDowns/DropDownMenu/DropDownMenu";
import { useTaskStore } from "@/features/tasks/store/taskStore";
import type { Task } from "@/features/tasks/types";
import { useState } from "react";
import DialogNewTask from "../DialogWindows/DialogNewTask";
import { useProjectStore } from "@/features/projects/store/projectStore";

export default function SingleTask({ task }: { task: Task }) {
  const removeTask = useTaskStore((state) => state.removeTask);
  const [editOpen, setEditOpen] = useState(false);

  const activeProjectId = useProjectStore((state) => state.activeProjectId);
  const projects = useProjectStore((state) => state.projects);
  const project = projects.find((p) => p.id === activeProjectId);

  const updateTask = useTaskStore((state) => state.updateTask);

  return (
    <>
      {project && (
        <DialogNewTask
          project={project}
          open={editOpen}
          onOpenChange={setEditOpen}
          initialData={task}
        />
      )}

      <Card>
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
          <CardAction>
            <DropDownMenu
              onDelete={() => removeTask(task.id)}
              onEdit={() => setEditOpen(true)}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardDescription>{task.description}</CardDescription>
          <select value={task.status}
          onChange={(e) => updateTask(task.id, { status: e.target.value as 'todo' | 'doing' | 'done'})}>
            <option value='todo'>To Do</option>
            <option value='doing'>Doing</option>
            <option value='done'>Done</option>
          </select>
        </CardContent>
      </Card>
    </>
  );
}
