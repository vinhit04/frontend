const Header: React.FC = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">Danh Gia</h1>
      <div className="flex items-center space-x-4">
        <img src="../images/setting.png" />
        <img src="../images/notification.png" />
        <img src="../images/Avatar.png" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};
export default Header;
