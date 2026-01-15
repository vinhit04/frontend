import DanhGiaTable from "../components/DanhGiaTable";
export default function DanhGia() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Đánh giá</h1>
      <div className="bg-white rounded-xl p-6 min-h-full">
        <div>
          <h1 className="text-xl font-semibold mb-4">Thông tin chung</h1>
          <div className="bg-white rounded-lg p-4">
            <DanhGiaTable />
          </div>
        </div>
      </div>

    </>
  );
}
