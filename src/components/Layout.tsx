import ProjectsArea from "@/components/ProjectArea/ProjectsArea";
import Navbar from "./DropDowns/Navbar/Navbar";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-mist-400 min-h-screen">
      <div className="flex justify-center p-1 text-4xl"><h1>TEAM TASK HUB</h1></div>
      <Navbar/>
      <ProjectsArea />
      <div>{children}</div>
    </div>
  );
}
