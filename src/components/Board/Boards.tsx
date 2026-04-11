import { useTaskStore } from "@/features/tasks/store/taskStore";
import TaskBoards, { type TaskBoard } from "../TaskBoard/Tasks";
import type { Project } from "@/features/projects/types";

export default function Board({ project }: { project: Project}) {
  const tasks = useTaskStore((state) =>
    state.tasks.filter((t) => t.projectId === project.id),
  );

  const boards: TaskBoard[] = [
    {
      name: "To Do:",
      status: "todo" as const,
      tasks: tasks.filter((t) => t.status === "todo"),
      createdAt: new Date(),
    },
    {
      name: "Doing:",
      status: "doing" as const,
      tasks: tasks.filter((t) => t.status === "doing"),
      createdAt: new Date(),
    },
    {
      name: "Done:",
      status: "done" as const,
      tasks: tasks.filter((t) => t.status === "done"),
      createdAt: new Date(),
    },
  ];

  

  return (
    <>
      {boards.map((board) => (
        <TaskBoards key={board.status} board={board} />
      ))}
    </>
  );
}
