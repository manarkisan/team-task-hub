import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "../../ui/menubar";

type TaskMenubarItem = {
  label: string;
  className: string;
  separator?: undefined;
};

export default function DropDownMenu({ onDelete }: { onDelete: () => void }) {
  const taskMenuItems: TaskMenubarItem[] = [
    { 
        
        label: "Edit Task", className: "" },
    {
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
            
            {taskMenuItems.map((item, index) =>
              item.separator ? (
                <MenubarSeparator key={index} />
              ) : (
                <MenubarItem
                  key={index}
                  className={`flex items-center gap-1 p-2.5 ${item.className}`}
                 onSelect={item.label === "Delete Task" ? onDelete : undefined}  > 
                  <span>{item.label}</span>
                 
                </MenubarItem>
              ),
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
