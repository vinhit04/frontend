
import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  FolderOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from '../images/Logo.png';
import { useNavigate } from "react-router-dom";
export const menuItems = [
  { key: "space", icon: <AppstoreOutlined />, url: '/space', label: "Space" },
  {
    key: "project", icon: <FolderOutlined />,
    url: '/project',
    label: "Dự án"
  },
  {
    key: "info",
    icon: <InfoCircleOutlined />,
    url: '/info',
    label: "Thông tin chung",
  },
  { key: "student", icon: <TeamOutlined />, url: '/student', label: "Sinh viên" },
  {
    key: "daily-report",
    icon: <FileDoneOutlined />,
    url: '/report',
    label: "Báo cáo hằng ngày",
  },
  {
    key: "evaluation",
    icon: <FileTextOutlined />,
    url: '/evaluate',
    label: "Đánh giá"
  },
  { key: "violation", icon: <WarningOutlined />, url: '/violation', label: "Vi phạm" },
]
export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <aside className="w-64 h-screen bg-white">
      <div className="px-[56px] py-[32px]">
        <img
          src={logo}
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
        items={menuItems}
        onClick={({ key }) => {
          const item = menuItems.find(i => i.key === key);
          if (item?.url) navigate(item.url);
        }}
      />
    </aside>
  );
}
