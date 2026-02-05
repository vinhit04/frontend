import {  MoreOutlined } from "@ant-design/icons";
import { Table, Tag, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
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
  {
    key: "2",
    info: "Đánh giá giữa kỳ",
    name: "Đánh giá giữa kỳ",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "Đang diễn ra",
    total: 20,
  },
  {
    key: "2",
    info: "Đánh giá giữa kỳ",
    name: "Đánh giá giữa kỳ",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "Đã kết thúc",
    total: 20,
  },
  {
    key: "2",
    info: "Đánh giá giữa kỳ",
    name: "Đánh giá giữa kỳ",
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
  {
    key: "2",
    info: "Đánh giá giữa kỳ",
    name: "Đánh giá giữa kỳ",
    start: "01/01/2025",
    end: "01/01/2025",
    status: "Đã kết thúc",
    total: 20,
  },
];
const statusColor: Record<string, string> = {
  "Sắp diễn ra": "orange",
  "Đang diễn ra": "green",
  "Đã kết thúc": "red",
};
export default function DanhGiaTable() {
  const navigate = useNavigate();
  return (
    <Table
      pagination={false}
      dataSource={data}
      scroll={{ y: 400, x: 0 }}
      style={{ width: "100%" }}
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
          key: "detail",
          render: () => (
            <Dropdown
              menu={{
                items: [{
                  key: "1", label: "Chi tiết",
                  onClick: () => navigate(`/evaluate/${data[0].key}`),
                }]
              }}
              trigger={["click"]}
            >
              <MoreOutlined
                style={{ fontSize: "20px", cursor: "pointer" }}
              />
            </Dropdown>
          ),
        },
      ]}
    />
  );
}
