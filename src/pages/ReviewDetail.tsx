import { EditOutlined, EyeOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Dropdown, Table, Tag } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RankPoint from "../components/RankPoint";
interface Student {
  checkbox: boolean;
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
  const [checkAll, setCheckAll] = useState(false);
  const [dialog, setDialog] = useState(false);
  const fetchData = async () => {
    const response = await fetch(`/api/review-cycles/${id}`);
    const data = await response.json();
    return data;
  };

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
  const handleAIAutoPoint = (value: any) => {
    navigate(`aiautopoint/${value.id}`);
  };

  const handleRankPoint = (value: any) => {
    setDialog(true);
    navigate(`rankpoint/${value.id}`);
  };

  const handleXemDiem = (value: any) => {
    navigate(`cyclicalpoints/${value.id}`);
  };

  const handleCheck = useCallback((data: any, value: any) => {
    setListStudent((prev) =>
      prev.map((x: any) => (x.id === data.id ? { ...x, isCheck: value } : x)),
    );
  }, []);
  const handleCheckAll = (e: any) => {
    const checked = e.target.checked;
    setCheckAll(!checked);
    if (handleCheck) {
      handleCheck(!checkAll, null);
    }
    setListStudent((prev) => prev.map((x) => ({ ...x, isCheck: checked })));
  };
  const columns = [
    {
      title: () => (
        <Checkbox checked={checkAll} onChange={(e) => handleCheckAll(e)} />
      ),
      render: (record: any) => (
        <Checkbox
          checked={record.isCheck ?? false}
          onChange={(e) => handleCheck(record, e.target.checked)}
        />
      ),
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
                onClick: () => handleXemDiem(record),
              },
              {
                key: "score",
                icon: <EditOutlined />,
                label: "Chấm điểm",
                onClick: () => handleRankPoint(record),
              },
              {
                key: "ai",
                label: "AI chấm điểm tự động ",
                onClick: () => handleAIAutoPoint(record),
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
  useEffect(() => {
    let _check = listStudent.filter((x: any) => x.isCheck);
    if (_check.length === listStudent.length && listStudent.length > 0) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [listStudent]);
  return (
    <div className="p-6 space-y-6">
      <span className=" text-sm cursor-pointer flex items-center gap-1">
        Đánh giá <span className="text-gray-400">{">"}</span> Chi tiết chu kỳ
      </span>
      <h1 className="text-2xl font-semibold">Chi tiết chu kỳ</h1>

      <Card style={{ marginBottom: "30px" }}>
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
          <h2 className="text-xl font-semibold">Danh sách sinh viên</h2>
          <div className="flex gap-2">
            <Button>AI chấm điểm hàng loạt</Button>
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
      <RankPoint isModalOpen={dialog} setIsModalOpen={setDialog} />
    </div>
  );
};

export default ReviewDetail;
