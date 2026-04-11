import { useTaskStore } from "@/features/tasks/store/taskStore";
import TaskBoards, { type TaskBoard } from "../TaskBoard/Tasks";
import type { Project } from "@/features/projects/types";


export default function Board({ project }: { project: Project }) {
  if (!project?.id) return null;

  const allTasks = useTaskStore((state) => state.tasks ?? []);

  const tasks = allTasks.filter((t) => t.projectId === project.id);

  const boards: TaskBoard[] = ["todo", "doing", "done"].map((status) => ({
    name:
      status === "todo"
        ? "To Do:"
        : status === "doing"
        ? "Doing:"
        : "Done:",
    status,
    tasks: tasks.filter((t) => t.status === status),
    createdAt: new Date(),
  }));

  return (
    <>
      {boards.map((board) => (
        <TaskBoards key={board.status} board={board} />
      ))}
    </>
  );
}