import TaskBoards, { type TaskBoard } from "../TaskBoard/Tasks";

export default function Board() {
    const boards: TaskBoard[] = [
        { name: "To Do:", createdAt: new Date(), tasks: [] },
        { name: "Doing:", createdAt: new Date(), tasks: [] },
        { name: "Done.", createdAt: new Date(), tasks: [] }
    ];

    return(
        <>
        {boards.map((board, index) => (
            <TaskBoards key={index} board={board} />
        ))}
        </>
    )
}