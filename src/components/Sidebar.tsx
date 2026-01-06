import { NavLink } from "react-router-dom";
import { classNames } from "primereact/utils";

const menu = [
  { label: "Evaluation", icon: "pi pi-chart-bar", path: "/evaluation" },
  { label: "Space", icon: "pi pi-database", path: "/space" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-6">Admin Panel</h2>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              classNames(
                "flex items-center gap-3 px-4 py-2 rounded-lg",
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              )
            }
          >
            <i className={item.icon} />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
