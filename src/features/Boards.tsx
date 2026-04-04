import TaskCards from "./Tasks";

export default function Board() {
    const boards: typeof TaskBoards[] = [
        { name: "To Do:", createdAt: new Date(), tasks: [] },
        { name: "Doing:", createdAt: new Date(), tasks: [] },
        { name: "Done.", createdAt: new Date(), tasks: [] }
    ];

    return(
        <>
        {boards.map((board, index) => (
            <TaskCards key={index} board={board} />
        ))}
        </>
    )
}