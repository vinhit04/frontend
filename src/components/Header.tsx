import React from "react";
function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-end px-6 gap-4">
      <div className="w-8 h-8 cursor-pointer">
        <img src="./public/setting.png"></img>
      </div>
      <div className="w-8 h-8 cursor-pointer">
        <img src="./public/notification.png"></img>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          className="w-8 h-8 rounded-full"
          src="./public/Avatar.png"
        ></img>
      </div>
    </header>
  );
}
export default Header;
