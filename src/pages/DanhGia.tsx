import DanhGiaTable from "../components/DanhGiaTable";
export default function DanhGia() {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold mb-4">Thông tin chung</h1>
        <div className="bg-white rounded-lg p-4">
          <DanhGiaTable />
        </div>
      </div>
    </>
  );
}
