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
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupTextarea, InputGroupButton } from "../ui/input-group";
import { useState } from "react";
import { useTaskStore } from "@/features/tasks/store/taskStore";
import { TaskSchema } from "@/features/tasks/types";
import type { Project } from "@/features/projects/types";

type DialogNewTaskProps = {
  project: Project;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function DialogNewTask({
  project,
  open,
  onOpenChange,
}: DialogNewTaskProps) {

  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open ?? internalOpen;
  const setIsOpen = onOpenChange ?? setInternalOpen;
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>New Task</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>CREATE NEW TASK</DialogTitle>
            <DialogDescription>Create a new task here.</DialogDescription>
          </DialogHeader>
          <TaskName onSuccess={() => setIsOpen(false)} project={project}/>
        </DialogContent>
       
      </Dialog>
    </>
  );
}

export function TaskName({
  onSuccess,
  project,
}: {
  onSuccess: () => void;
  project: Project;
}) {
   const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleSubmit() {
    const result = TaskSchema.safeParse({
      id: crypto.randomUUID(),
      title,
      description,
      status: 'todo',
      projectId: project.id
    });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    addTask(result.data);
    onSuccess();
  }
  return (
    <>
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-end-input">Create New Task</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="Task Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <InputGroupAddon align="block-end">
            
          </InputGroupAddon>
        </InputGroup>
        {error && <p className="text-destructive text-sm">{error}</p>}
        <FieldDescription>Footer positioned below the input.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">Task Description</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputGroupAddon align="block-end">
            
            <InputGroupButton variant="default" size="sm" className="ml-auto" onClick={handleSubmit}>
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
