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

export default function ProjectsArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project</CardTitle>
        <CardDescription>yhghgj</CardDescription>
        <CardAction><Button>New</Button></CardAction>
      </CardHeader>
      <CardContent>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi, nisi, a dolorum corrupti vel enim fuga, et necessitatibus quaerat dicta quis quos officia quo. Quos aspernatur veritatis accusantium vitae!</p>
      </CardContent>
      <CardFooter>
        <p>🦶🏻</p>
      </CardFooter>
    </Card>
  );
}
