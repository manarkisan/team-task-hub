import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "../../ui/menubar";

// type TaskMenubarItem = {
//   label: string;
//   className: string;
//   separator?: undefined;
// };

export default function DropDownMenu({ onDelete, onEdit }: {
  onDelete: () => void;
  onEdit: () => void;
}) {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>...</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onSelect={onEdit} >
              Edit Task 
              
            </MenubarItem>
            <MenubarItem className="text-red-600" onSelect={onDelete}>
              Delete Task
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
