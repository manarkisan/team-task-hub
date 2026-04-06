import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

export default function SingleTask() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <p>One task to rule them all...</p>
          </CardTitle>
          <CardAction>
            <DropDownMenu />
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>describsion</p>
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
