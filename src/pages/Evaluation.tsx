import { StatusTagEnum } from "../common/enum/status-tag.enum";
type Status = "upcoming" | "running" | "done";
const data = [
  {
    name: "Đánh giá tuần 1-2",
    start: "01/01/2025",
    end: "01/01/2025",
    status: StatusTagEnum.UPCOMING,
    count: 20,
  },
  {
    name: "Đánh giá giữa kỳ",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "running" as Status,
    count: 20,
  },
  {
    name: "Đánh giá cuối kỳ",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "done" as Status,
    count: 20,
  },
];
type StatusTagProps = {
  status: StatusTagEnum;
};
const StatusTag = ({ status }: StatusTagProps) => {
  const map = {
    [StatusTagEnum.UPCOMING]: ["Sắp diễn ra", "bg-orange-100 text-orange-600"],
    [StatusTagEnum.RUNNING]: ["Đang diễn ra", "bg-green-100 text-green-600"],
    [StatusTagEnum.DONE]: ["Đã kết thúc", "bg-red-100 text-red-600"],
  };
  return (
    <></>
    // <span className={`px-3 py-1 rounded-full text-sm ${map[status][1]}`}>
    //   {map[status][0]}
    // </span>
  );
};
function Evaluation() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Đánh giá</h1>

      <div className="bg-white rounded-xl shadow">
        <div className="px-6 py-4 border-b font-medium">Thông tin chung</div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">Tên chu kỳ</th>
              <th className="px-6 py-3">Thời gian bắt đầu</th>
              <th className="px-6 py-3">Thời gian kết thúc</th>
              <th className="px-6 py-3">Trạng thái</th>
              <th className="px-6 py-3">Số sinh viên đã được chấm điểm</th>
              <th className="px-6 py-3"></th>   
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{item.name}</td>
                <td className="px-6 py-4 text-center">{item.start}</td>
                <td className="px-6 py-4 text-center">{item.end}</td>
                <td className="px-6 py-4 text-center">
                  <StatusTag status={item.status} />
                </td>
                <td className="px-6 py-4 text-center">{item.count}</td>
                <td className="px-6 py-4 text-right">
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Evaluation;
