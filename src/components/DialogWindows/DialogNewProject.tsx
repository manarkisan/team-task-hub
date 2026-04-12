import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupButton,
} from "../ui/input-group";
import { useState } from "react";
import { useProjectStore } from "@/features/projects/store/projectStore";
import { ProjectSchema } from "@/features/projects/types";

export default function DialogNewProject({
  open,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open ?? internalOpen;
  const setIsOpen = onOpenChange ?? setInternalOpen;
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>CREATE NEW Project</DialogTitle>
            <DialogDescription>Create a new Project here.</DialogDescription>
          </DialogHeader>
          <ProjectName onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}

 function ProjectName({ onSuccess }: { onSuccess: () => void }) {
  const addProject = useProjectStore((state) => state.addProject);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const setActiveProject = useProjectStore((s) => s.setActiveProject);

  function handleSubmit() {
    const result = ProjectSchema.safeParse({
      id: crypto.randomUUID(),
      title: title ?? "",
      description: description ?? "",
      createdAt: new Date().toISOString(),
      
    });

    if (!result.success) {
        console.log(result.error)
      setError(result.error.issues[0].message);
      return;
    }

    addProject(result.data);
    setActiveProject(result.data.id);
    onSuccess();
  }
  return (
    <>
      <FieldGroup className="max-w-sm">
        <Field>
          <FieldLabel htmlFor="block-end-input">Create New Project</FieldLabel>
          <InputGroup className="h-auto">
            <InputGroupInput
              id="block-end-input"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputGroupAddon align="block-end"></InputGroupAddon>
          </InputGroup>
          {error && <p className="text-destructive text-sm">{error}</p>}
          <FieldDescription>
            Footer positioned below the input.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="block-end-textarea">
            Project Description
          </FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id="block-end-textarea"
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputGroupAddon align="block-end">
              <InputGroupButton
                variant="default"
                size="sm"
                className="ml-auto"
                onClick={handleSubmit}
              >
                Create Project
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
