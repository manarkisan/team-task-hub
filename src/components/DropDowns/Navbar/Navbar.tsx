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
import { useProjectStore } from "@/features/projects/store/projectStore";
import { useState } from "react";




export default function Navbar() {
const [taskOpen, setTaskOpen] = useState(false);
const [projectOpen, setProjectOpen] = useState(false);
const setActiveProject = useProjectStore((state) => state.setActiveProject);
const activeProjectId = useProjectStore((state) => state.activeProjectId);
const projects = useProjectStore((state) => state.projects);
const activeProject = projects.find((p) => p.id === activeProjectId);

  return (
     <><Menubar><DialogNewProject open={projectOpen} onOpenChange={setProjectOpen} />
    <DialogNewTask open={taskOpen} onOpenChange={setTaskOpen} project={activeProject!} />
      <MenubarMenu>
        <MenubarTrigger>New...</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem onSelect={() => setProjectOpen(true)}>
              New Project <MenubarShortcut>Ctrl N</MenubarShortcut>
            </MenubarItem>

            <MenubarItem onSelect={() => activeProject && setTaskOpen(true)}
  disabled={!activeProject}>New Task</MenubarItem>
            <MenubarItem

              onSelect={() => setActiveProject(null) 
              // console.log("Now choose a project!")
              }>
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
