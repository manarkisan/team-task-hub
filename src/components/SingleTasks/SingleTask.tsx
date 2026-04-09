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
import type { Task } from '@/features/tasks/types';

export default function SingleTask({ task }: { task: Task}) {
  const removeTask = useTaskStore((state) => state.removeTask)
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            {task.title}
          </CardTitle>
          <CardAction>
            <DropDownMenu onDelete={() => removeTask(task.id)} />
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {task.description}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
