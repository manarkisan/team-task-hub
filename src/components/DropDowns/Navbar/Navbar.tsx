import DialogNewProject from "@/components/DialogWindows/DialogNewProject";
import DialogNewTask from "@/components/DialogWindows/DialogNewTask";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";




export default function Navbar() {
const [taskOpen, setTaskOpen] = useState(false);
const [projectOpen, setProjectOpen] = useState(false);

  return (
     <><Menubar><DialogNewTask open={taskOpen} onOpenChange={setTaskOpen} /><DialogNewProject open={projectOpen} onOpenChange={setProjectOpen} />
      <MenubarMenu>
        <MenubarTrigger>New...</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem onSelect={() => setProjectOpen(true)}>
              New Project <MenubarShortcut>Ctrl N</MenubarShortcut>
            </MenubarItem>

            <MenubarItem onSelect={() => setTaskOpen(true)}>New Task</MenubarItem>
            <MenubarItem

              onSelect={() => console.log("Now choose a project!")}>
              Open Project...<MenubarShortcut>Ctrl O</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Share</MenubarItem>
            <MenubarItem>Print</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar></>
  );
}
