import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Board from "../Board/Boards";

export default function ProjectsArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Name</CardTitle>
        <CardDescription>Project description</CardDescription>
        <CardAction>
          <Button>New Task</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Board></Board>
      </CardContent>
      <CardFooter>
        <p>🦶🏻</p>
      </CardFooter>
    </Card>
  );
}
