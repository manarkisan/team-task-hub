import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import SingleTask from "../SingleTasks/SingleTask";
import type { Task } from "@/features/tasks/types";

export type TaskBoard = {
  name: string;
  createdAt: Date;
  tasks: Task[];
  status: string;
};

export default function TaskBoards({ board }: { board: TaskBoard }) {
  const { name: boardName, tasks } = board;
  const numberTasks = tasks.length;

  return (
    <Card className="bg-emerald-100 m-2 shadow-lg shadow-cyan-600">
      <CardTitle>{boardName}</CardTitle>
      <CardDescription>{numberTasks}</CardDescription>
      <div>
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </Card>
  );
}
