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
import ProgressBar from "../ProgressBar/ProgressBar";
import NewTask from "../DialogWindows/DialogNewTask";
import DialogNewTask from "../DialogWindows/DialogNewTask";

export default function ProjectsArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Name</CardTitle>
        <CardDescription>Project description</CardDescription>
        <CardAction>
          <DialogNewTask />
        </CardAction>
      </CardHeader>
      <CardContent>
        {/* <ProgressBar/> */}
        <Board></Board>
      </CardContent>
      <CardFooter>
        <p>🦶🏻</p>
      </CardFooter>
    </Card>
  );
}
