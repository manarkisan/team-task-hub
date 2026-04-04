import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import TaskCards from "./Tasks";
import Board from "./Boards";

export default function ProjectsArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Name</CardTitle>
        <CardDescription>Project description</CardDescription>
        <CardAction><Button>New</Button></CardAction>
      </CardHeader>
      <CardContent>

        <Board></Board>

        {/* Tasks */}
        {/* <TaskCards/> */}

      </CardContent>
      <CardFooter>
        <p>🦶🏻</p>
      </CardFooter>
    </Card>
  );
}
