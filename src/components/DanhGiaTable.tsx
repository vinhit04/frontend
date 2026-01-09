// components/EvaluationTable.tsx
import { Table, Tag, Button } from "antd";

interface DanhGia {
  key: string;
  name: string;
  start: string;
  end: string;
  status: "Sắp diễn ra" | "Đang diễn ra" | "Đã kết thúc";
  total: number;
}

const data: DanhGia[] = [
  {
    key: "1",
    name: "Đánh giá tuần 1-2",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "Sắp diễn ra",
    total: 20,
  },
  {
    key: "2",
    name: "Đánh giá giữa kỳ",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "Đang diễn ra",
    total: 20,
  },
  {
    key: "3",
    name: "Đánh giá cuối kỳ",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "Đã kết thúc",
    total: 20,
  },
];

const statusColor = {
  "Sắp diễn ra": "orange",
  "Đang diễn ra": "green",
  "Đã kết thúc": "red",
};

export default function DanhGiaTable() {
  return (
    <Table
      columns={[
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
          render: () => <Button size="small">Chi tiết</Button>,
        },
      ]}
      dataSource={data}
      pagination={false}
    />
  );
}
