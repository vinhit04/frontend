import { Table, Tag, Button } from "antd";

interface DanhGia {
  key: string;
  info: string; 
  name: string;
  start: string;
  end: string;
  status: "Sắp diễn ra" | "Đang diễn ra" | "Đã kết thúc";
  total: number;
}

const data: DanhGia[] = [
  {
    key: "1",
    info: "Đánh giá định kỳ",
    name: "Đánh giá tuần 1–2",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "Sắp diễn ra",
    total: 20,
  },
  {
    key: "2",
    info: "Đánh giá giữa kỳ",
    name: "Đánh giá giữa kỳ",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "Đang diễn ra",
    total: 20,
  },
];

const statusColor: Record<string, string> = {
  "Sắp diễn ra": "orange",
  "Đang diễn ra": "green",
  "Đã kết thúc": "red",
};

export default function DanhGiaTable() {
  return (
    <Table<DanhGia>
      pagination={false}
      columns={[
        {
          title: "Thông tin chung",
          dataIndex: "info",
        },
        {
          title: "Tên chu kỳ",
          dataIndex: "name",
        },
        {
          title: "Thời gian bắt đầu",
          dataIndex: "start",
        },
        {
          title: "Thời gian kết thúc",
          dataIndex: "end",
        },
        {
          title: "Trạng thái",
          dataIndex: "status",
          render: (status) => <Tag color={statusColor[status]}>{status}</Tag>,
        },
        {
          title: "Số sinh viên được chấm điểm",
          dataIndex: "total",
        },
        {
          title: "",
          render: () => <Button type="link">Chi tiết</Button>,
        },
      ]}
      dataSource={data}
    />
  );
}
