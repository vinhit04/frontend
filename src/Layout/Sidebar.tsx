import Logo from "../images/Logo.png";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  FolderOutlined,
  TeamOutlined,
  FileTextOutlined,
  WarningOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r bg-white">
      <div className="flex items-center gap-2 p-4 font-semibold text-red-500">
        <img src="Logo"></img>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["evaluation"]}
        items={[
          { key: "space", icon: <AppstoreOutlined />, label: "Space" },
          { key: "project", icon: <FolderOutlined />, label: "Dự án" },
          { key: "info", icon: <FileTextOutlined />, label: "Thông tin chung" },
          { key: "student", icon: <TeamOutlined />, label: "Sinh viên" },
          { key: "evaluation", icon: <FileTextOutlined />, label: "Đánh giá" },
          { key: "violation", icon: <WarningOutlined />, label: "Vi phạm" },
        ]}
      />
    </aside>
  );
}
