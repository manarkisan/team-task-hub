import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupText, InputGroupTextarea, InputGroupButton } from "../ui/input-group";


export default function DialogNewTask() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>New Task</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>CREATE NEW TASK</DialogTitle>
            <DialogDescription>Create a new task here.</DialogDescription>
          </DialogHeader>
        </DialogContent>
        <DialogContent>
          <TaskName/>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function TaskName() {
  return (
    <>
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-end-input">Create New Task</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="Task Name" />
          <InputGroupAddon align="block-end">
            
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Footer positioned below the input.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">Task Description</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="Description..."
          />
          <InputGroupAddon align="block-end">
            
            <InputGroupButton variant="default" size="sm" className="ml-auto">
              Create Task
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          Footer positioned below the textarea.
        </FieldDescription>
      </Field>
    </FieldGroup>
    </>
  );
}
