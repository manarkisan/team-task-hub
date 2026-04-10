import DialogNewTask from "@/components/DialogWindows/DialogNewTask";
import type { TaskBoard } from "@/components/TaskBoard/Tasks";
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
// const [selectedProject, setSelectedProject] = useState<TaskBoard>(projects[0]);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>New...</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New Project <MenubarShortcut>Ctrl N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem onSelect={() => <DialogNewTask/>}>New Task</MenubarItem>
            <MenubarItem 
            // selectedProject={selectedProject}
            // setSelectedProject={setSelectedProject} 
            onSelect={() => 
              console.log("Now choose a project!")}>
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
    </Menubar>
  );
}
