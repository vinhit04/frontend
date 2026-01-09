import Sidebar from "./Layout/Sidebar";
export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6"></main>
    </div>
  );
}
