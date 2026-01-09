import MainLayout from "./Layout/Mainlayout";
import DanhGia from "./pages/DanhGia";
import "antd/dist/reset.css";
export default function App() {
  return (
    <MainLayout>
      <DanhGia />
    </MainLayout>
  );
}
