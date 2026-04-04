import ProjectsArea from "@/features/ProjectsArea";
import Navbar from "./Navbar";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>TEAM TASK HUB</h1>
      <Navbar/>
      <ProjectsArea/>
      <div>{children}</div>
    </>
  );
}
