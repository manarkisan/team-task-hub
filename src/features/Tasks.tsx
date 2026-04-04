import { Card, CardTitle,  CardDescription } from "@/components/ui/card";

export type TaskBoard = {
    name: string;
    createdAt: Date;
    tasks: string[]
};

export default function TaskCards({ board }: { board: TaskBoard }) {
    const { name: boardName, tasks } = board;
    const numberTasks = tasks.length;

    return (
        <Card>
            <CardTitle>{boardName}</CardTitle>
            <CardDescription>{numberTasks}</CardDescription>
        </Card>
    )
}
