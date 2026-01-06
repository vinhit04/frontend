import { FC } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

const Header: FC = () => {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

        <span className="p-input-icon-left hidden md:block">
          <i className="pi pi-search" />
          <InputText placeholder="Search..." className="h-9" />
        </span>
      </div>

      
      <div className="flex items-center gap-4">
        
        <Button icon="pi pi-bell" rounded text className="relative">
          <Badge
            value="3"
            severity="danger"
            className="absolute -top-1 -right-1"
          />
        </Button>

        
        <Button icon="pi pi-cog" rounded text />

      
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar image="https://i.pravatar.cc/40" shape="circle" />
          <span className="hidden md:block text-sm font-medium text-gray-700">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
