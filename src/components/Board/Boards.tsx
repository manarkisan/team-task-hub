import { useTaskStore } from "@/features/tasks/store/taskStore";
import TaskBoards, { type TaskBoard } from "../TaskBoard/Tasks";
import { useProjectStore } from "@/features/projects/store/projectStore";

export default function Board() {
    const tasks = useTaskStore((state) => state.tasks);
    const boards: TaskBoard[] = [
        {
            name: "To Do:", status: "todo" as const, tasks: tasks.filter(t => t.status === "todo"),
            createdAt: new Date()
        },
        { name: "Doing:", status: "doing" as const, tasks: tasks.filter(t => t.status === "doing"),
            createdAt: new Date()},
        { name: "Done:", status: "done" as const, tasks: tasks.filter(t => t.status === "done"),
            createdAt: new Date() }
    ];

    const project = useProjectStore((state) => state.projects);

    return(
        <>
        {boards.map((board) => (
            <TaskBoards key={board.status} board={board} />

        ))}
        </>
    )
}