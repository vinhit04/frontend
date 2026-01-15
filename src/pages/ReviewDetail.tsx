import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Table, Tag, Dropdown } from "antd";
import { MoreOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface Student {
  id: number;
  ten: string;
  ma: string;
  diem: number | null;
  trangThaiChamDiem: string;
  ngayChamDiem: string | null;
}

const ReviewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [listStudent, setListStudent] = useState<Student[]>([]);
    const fetchData = async () => {
    const response = await fetch(`/api/review-cycles/${id}`);
    const data = await response.json();
    return data;
  }
  const getStudents = async () => {
    const res = await fetch("http://localhost:4000/students");
    const data = await res.json();
    setListStudent(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const renderStatus = (status: string) => {
    switch (status) {
      case "Chưa chấm":
        return <Tag color="orange">Chưa chấm</Tag>;
      case "Đang chấm":
        return <Tag color="blue">Đang chấm</Tag>;
      case "Đã chấm":
        return <Tag color="green">Đã hoàn thành</Tag>;
      default:
        return <Tag>Không xác định</Tag>;
    }
  };

  const columns = [
    {
      title: "Tên sinh viên",
      dataIndex: "ten",
      key: "ten",
    },
    {
      title: "Mã sinh viên",
      dataIndex: "ma",
      key: "ma",
    },
    {
      title: "Điểm tổng của chu kỳ này",
      key: "diem",
      render: (_: any, record: Student) =>
        record.diem !== null ? `${record.diem}/100` : "-",
    },
    {
      title: "Trạng thái chấm điểm",
      dataIndex: "trangThaiChamDiem",
      key: "trangThaiChamDiem",
      render: renderStatus,
    },
    {
      title: "Ngày chấm điểm gần nhất",
      dataIndex: "ngayChamDiem",
      key: "ngayChamDiem",
      render: (date: string | null) => date ?? "-",
    },
    {
      title: "",
      key: "action",
      width: 60,
      render: () => (
        <Dropdown
          menu={{
            items: [
              {
                key: "view",
                icon: <EyeOutlined />,
                label: "Xem điểm",
              },
              {
                key: "score",
                icon: <EditOutlined />,
                label: "Chấm điểm",
              },
              {
                key: "ai",
                label: "AI chấm điểm tự động",
              },
              {
                key: "edit",
                label: "Chỉnh sửa điểm",
              },
            ],
          }}
          trigger={["click"]}
        >
          <MoreOutlined className="cursor-pointer text-lg" />
        </Dropdown>
      ),
    },
  ];
  return (
    <div className="p-6 space-y-6">
      <Button type="link" onClick={() => navigate(-1)}>
        ← Trở lại
      </Button>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Danh sách sinh viên – Chu kỳ #{id}
        </h2>

        <div className="flex gap-2">
          <Button type="default">AI chấm điểm hàng loạt</Button>
          <Button type="default">Chấm điểm hàng loạt</Button>
          <Button type="primary" danger>
            Import điểm
          </Button>
        </div>
      </div>

      <Card>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={listStudent}
          pagination={{ pageSize: 8 }}
        />
      </Card>
    </div>
  );
};

export default ReviewDetail;
