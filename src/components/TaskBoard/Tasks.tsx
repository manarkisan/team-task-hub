import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import SingleTask from "../SingleTasks/SingleTask";

export type TaskBoard = {
  name: string;
  createdAt: Date;
  tasks: Task[];
};

export default function TaskBoards({ board }: { board: TaskBoard }) {
  const { name: boardName, tasks } = board;
  const numberTasks = tasks.length;

  return (
    <Card>
      <CardTitle>{boardName}</CardTitle>
      <CardDescription>{numberTasks}</CardDescription>
      <div>
        {[1, 2].map((index) => (
          <SingleTask key={index} />
        ))}
      </div>
    </Card>
  );
}
