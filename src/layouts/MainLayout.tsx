import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DanhGia from "../pages/DanhGia";
type Props = {
  children: any;
}
function MainLayout({}: Props) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <DanhGia />
      </div>
    </div>
  );
}
export default MainLayout;
