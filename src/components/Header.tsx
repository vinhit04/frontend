import '../index.css';
import setting from "../images/setting.png";
import avatar from "../images/avatar.png";
import notification from "../images/notification.png";
function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800"></h1>
      <div className="flex items-center space-x-4">
        <img src={setting} alt="Settings" className="h-6 w-6 cursor-pointer" />
        <img src={notification} alt="Notifications" className="h-6 w-6 cursor-pointer" />
        <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full cursor-pointer" />
      </div>
    </header>
  );
};
export default Header;
