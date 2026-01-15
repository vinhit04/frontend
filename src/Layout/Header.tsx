import {
  ArrowLeftOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

export default function Header() {
  return (
    <header className="h-14 bg-white flex items-center justify-between px-6 w-full">
      <div className="flex items-center gap-3 text-gray-600">
      </div>
      <div className="flex items-center gap-4">
        <SettingOutlined className="text-lg text-gray-600 cursor-pointer" />
        <BellOutlined className="text-lg text-gray-600 cursor-pointer" />
        <Avatar size="small" src="../images/Avatar.png" />
      </div>
    </header>
  );
}
