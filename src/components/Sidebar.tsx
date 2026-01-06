import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
 function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Internship OneConnect</div>

      <ul className="menu">
        <li>Space</li>
        <li>Dự án</li>
        <li>Thông tin chung</li>
        <li>Sinh viên</li>
        <li>Báo cáo hằng ngày</li>
        <li className="active">Đánh giá</li>
        <li>Vi phạm</li>
      </ul>
    </div>
  );
}
export default Sidebar;