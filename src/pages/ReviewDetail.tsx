import { useParams, useNavigate } from "react-router-dom";

import { Card, Button, Table, Tag, Dropdown , Checkbox } from "antd";
import { Card, Button, Table, Tag, Dropdown, Checkbox } from "antd";

import { MoreOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface Student {
  checkbox : boolean;
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

  const handleXemDiem = (value: any) => {
    navigate(`cyclicalpoints/${value.id}`)
  }
  const columns = [
    {
      title: () => (<Checkbox  />),
      dataIndex: "ten",
      key: "ten",
      render: () =>
        <Checkbox />
    },
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
      render: (record: any) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "view",
                icon: <EyeOutlined />,
                label: "Xem điểm",
                onClick: () => handleXemDiem(record)
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
      <span
        className=" text-sm cursor-pointer flex items-center gap-1" >
        Đánh giá <span className="text-gray-400">{'>'}</span> Chi tiết chu kỳ
      </span>
      <h1 className="text-2xl font-semibold">Chi tiết chu kỳ</h1>

      <Card style={{ marginBottom: '30px' }}>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Thông tin chung
          </h2>
          <div className="border-b border-gray-200 mb-4" />
          <div className="flex justify-between items-start gap-6">
            <div>
              <span className="text-sm text-gray-500">Tên chu kỳ</span>
              <h2 className="text-lg font-semibold text-gray-800">
                Đánh giá tuần 1-2
              </h2>
            </div>

            <div>
              <span className="text-sm text-gray-500">Thời gian</span>
              <h2 className="text-lg font-semibold text-gray-800">
                18/11/2025 - 18/11/2025
              </h2>
            </div>
            <div>
              <span className="text-sm text-gray-500 block mb-1">
                Trạng thái
              </span>
              <span className=" inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-green-700 bg-green-100">
                Đang diễn ra
              </span>
            </div>
          </div>
        </div>
      </Card>


      <Card className="">
        <div className="flex justify-between my-4">
          <h2 className="text-xl font-semibold">
            Danh sách sinh viên
          </h2>
          <div className="flex gap-2">
            <Button type="default">AI chấm điểm hàng loạt</Button>
            <Button type="default">Chấm điểm hàng loạt</Button>
            <Button type="primary" danger>
              Import điểm
            </Button>
          </div>
        </div>

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
