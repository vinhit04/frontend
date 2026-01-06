import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Space from "./pages/Space";
import ViPham from "./pages/ViPham";
import BaoCaoHangNgay from "./pages/BaoCaoHangNgay";
import DanhGia from "./pages/DanhGia";
import ThongTinChung from "./pages/ThongTinChung";
import SinhVien from "./pages/SinhVien";
 function App() {
  return (  
    <BrowserRouter>
      <Routes>
          <Route path="/danhgia" element={<DanhGia />} />
          <Route path="/baocaohangngay" element={<BaoCaoHangNgay />} />
          <Route path="/vipham" element={<ViPham />} />
          <Route path="/space" element={<Space />} />
         <Route path="/thongtinchung" element={<ThongTinChung />} />
        <Route path="/danhgia" element={<DanhGia />} />
        <Route path="/sinhvien" element={<SinhVien />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;