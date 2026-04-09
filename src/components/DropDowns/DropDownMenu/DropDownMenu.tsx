import type { JSX } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "../../ui/menubar";

type TaskMenubarItem = {
  // icon: JSX.Element;
  label: string;
  className: string;
  separator?: undefined;
};

export default function DropDownMenu({ onDelete }: { onDelete: () => void }) {
  const taskMenuItems: TaskMenubarItem[] = [
    { 
        // icon: <FaRegEdit />, 
        label: "Edit Task", className: "" },
    {
    //   icon: <MdOutlineDelete className="text-lg" />,
      label: "Delete Task",
      className: "text-red-600",
    },
  ];
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>...</MenubarTrigger>
          <MenubarContent>
            {" "}
            {taskMenuItems.map((item, index) =>
              item.separator ? (
                <MenubarSeparator key={index} />
              ) : (
                <MenubarItem
                  key={index}
                  className={`flex items-center gap-1 p-2.5 ${item.className}`}
                 onSelect={item.label === "DeleteTask" ? onDelete : undefined}  > 
                  {/* {item.icon} */}
                  <span>{item.label}</span>
                 
                </MenubarItem>
              ),
            )}
            {/* <MenubarItem>Edit Task</MenubarItem>
            <MenubarItem>Delete Task</MenubarItem> */}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
