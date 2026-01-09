
import { Menu } from "antd";
import {
  ArrowLeftOutlined,
  AppstoreOutlined,
  FolderOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  WarningOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white">
      <div className="px-[56px] py-[32px]">
        <img
          src="Logo.png"
          alt="Internship OneConnect"
          className="w-[128px] h-[32px] object-contain"
        />
      </div>
      <div className="flex items-center gap-2 px-6 py-4 text-gray-500 cursor-pointer">
        <ArrowLeftOutlined />
        <span className="text-sm">Trở lại trang trước</span>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["evaluation"]}
        className="border-none"
        items={[
          { key: "space", icon: <AppstoreOutlined />, label: "Space" },
          { key: "project", icon: <FolderOutlined />, label: "Dự án" },
          {
            key: "info",
            icon: <InfoCircleOutlined />,
            label: "Thông tin chung",
          },
          { key: "student", icon: <TeamOutlined />, label: "Sinh viên" },
          {
            key: "daily-report",
            icon: <FileDoneOutlined />,
            label: "Báo cáo hằng ngày",
          },
          { key: "evaluation", icon: <FileTextOutlined />, label: "Đánh giá" },
          { key: "violation", icon: <WarningOutlined />, label: "Vi phạm" },
        ]}
      />
    </aside>
  );
}
