import {
  AppstoreOutlined,
  DashboardOutlined,
  ArrowLeftOutlined,
  FileTextOutlined,
  TeamOutlined,
  WarningOutlined,
  GlobalOutlined,
  UserOutlined,
  ProfileOutlined,
  LinkOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from '../images/Logo.png';
import { useNavigate } from "react-router-dom";
export const menuItems = [
  {
    key: "project", icon: <AppstoreOutlined />,
    url: '/project',
    label: "Dự án",
    children: [
      { key: "space", icon: <DashboardOutlined />, url: '/space', label: "Space" },
      { key: "projectinfo", icon: <FileTextOutlined />, url: '/projectinfo', label: "Thông tin dự án" },
    ]
  },
  {
    key: "praticegroup", icon: <TeamOutlined />,
    url: '/praticegroup',
    label: "Nhóm thực tập",
    children: [
      {
        key: "info",
        icon: <GlobalOutlined/>,
        url: '/info',
        label: "Thông tin nhóm",
      },
      { key: "student", icon: <UserOutlined />, url: '/praticegroup/student', label: "Sinh viên" },
      {
        key: "daily-report",
        icon: <ProfileOutlined />,
        url: '/report',
        label: "Báo cáo hằng ngày",
      },
      {
        key: "evaluation",
        icon: <StarOutlined/>,
        url: '/evaluate',
        label: "Đánh giá"
      },
      { key: "benlienquan", icon: <LinkOutlined />, url: '/benlienquan', label: "Bên liên quan" },
      { key: "violation", icon: <WarningOutlined />, url: '/violation', label: "Vi phạm" },
    ]
  },

]
const findMenuItemByKey: any = (items: any, key: any) => {
  for (const item of items) {
    if (item.key === key) return item;
    if (item.children) {
      const found = findMenuItemByKey(item.children, key);
      if (found) return found;
    }
  }
  return null;
};
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
      <div className="flex items-center gap-2 px-6 py-4 text-gray-500 cursor-pointer hover:text-red-600">
        <ArrowLeftOutlined />
        <span className="text-sm hover:text-red-600"
          onClick={() => navigate(-1)}>
          Trở lại trang trước
        </span>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["evaluation"]}
        className="border-none"
        items={menuItems}
        onClick={({ key }) => {
          const item = findMenuItemByKey(menuItems, key);
          if (item?.url) {
            navigate(item.url);
          }
        }}
      />
    </aside>
  );
}
