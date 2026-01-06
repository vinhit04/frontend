const Header: React.FC = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Đánh giá</h1>

      <div className="flex items-center gap-6">
        <button className="relative">
          <i className="pi pi-bell text-xl"></i>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button>
          <i className="pi pi-cog text-xl"></i>
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Header;
