import logo from "../images/Logo.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo" px-6 py-4>
      <img src={logo} />
      </div>
      <ul className="menu">
        <li>Space</li>
        <li>Dự án</li>
        <li>Thông tin chung</li>
        <li>Sinh viên</li>
        <li>Báo cáo hằng ngày</li>
        <li>Đánh giá</li>
        <li>Vi phạm</li>
      </ul>
    </div>
  );
}
export default Sidebar;