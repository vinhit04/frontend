import { useState } from "react";
import logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import { classNames } from "primereact/utils";
type MenuItem = {
  label: string;
  icon: string;
  key: string;
};
const MenuItems: MenuItem[] = [
  { key: "/Space", label: "Space", icon: logo },
  { key: "/DuAn", label: "Du an", icon: logo },
  { key: "/ThongTinChung", label: "Thong Tin Chung", icon: logo },
  { key: "/SinhVien", label: "Sinh Vien", icon: logo },
  { key: "/BaoCaoHangNgay", label: "Bao Cao Hang Ngay", icon: logo },
  { key: "/DanhGia", label: "Danh Gia", icon: logo },
  { key: "/ViPham", label: "Vi Pham", icon: logo },
];
function Sidebar() {
  const [active, setActive] = useState("review");
  return (
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6">
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Logo" />
      </div>
      <NavLink to="/" className="flex items-center gap-2 text-sm text-pink-600 mb-6 hover:underline">
        <i className="pi pi-arrow-left" />
        Trở lại trang trước
      </NavLink>
      <nav className="space-y-1">
        {MenuItems.map((item) => {
          const isActive = active === item.key;
            return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={classNames(
                "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition",
                {
                  "bg-pink-50 text-pink-600 font-medium": isActive,
                  "text-gray-600 hover:bg-gray-100": !isActive,
                }
              )}
            >
              <i className={`${item.icon} text-base`} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
export default Sidebar;