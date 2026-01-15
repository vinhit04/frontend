
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <aside className="w-64 bg-slate-800 text-white shadow-lg">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1">
        <header className="h-16 bg-white px-6 flex items-center">
          <Header />
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-xl font-semibold mb-4">Đánh giá</h1>
          <div className="bg-white rounded-xl p-6 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
