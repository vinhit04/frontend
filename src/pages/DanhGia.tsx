import DanhGiaTable from "../components/DanhgiaTable";
export default function DanhGia() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Đánh giá</h1>

      <div className="bg-white rounded-lg p-4">
        <DanhGiaTable/>
      </div>
    </>
  );
}
