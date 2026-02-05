import {
  Modal,
  Card,
  Row,
  Col,
  Table,
  Tag,
  InputNumber,
  Select,
  Input,
  Button,
} from 'antd';
import { memo } from 'react';

const reviewers = [
  'Nguyễn Văn Luận',
  'Trần Minh Cường',
  'Nguyễn Xuân Bách',
];

const scoreOptions = [
  { label: 'Xuất sắc', value: 'excellent' },
  { label: 'Tốt', value: 'good' },
  { label: 'Trung bình', value: 'average' },
];

const dataSource = [
  {
    key: '1',
    name: 'Chuẩn bị',
    weight: 10,
    max: 10,
    scores: {
      'Nguyễn Văn Luận': <InputNumber min={0} max={10} />,
      'Trần Minh Cường': 10,
      'Nguyễn Xuân Bách': 10,
    },
  },
  {
    key: '2',
    name: 'Thuyết trình',
    weight: 10,
    max: 15,
    scores: {
      'Nguyễn Văn Luận': (
        <Select placeholder="Chọn" options={scoreOptions} />
      ),
      'Trần Minh Cường': 15,
      'Nguyễn Xuân Bách': 15,
    },
    children: [
      {
        key: '2-1',
        name: '1. Thuyết trình rõ ràng, lưu loát và tự tin',
        weight: 10,
        max: 15,
        scores: {
          'Nguyễn Văn Luận': <Input placeholder="Nhập" />,
        },
      },
      {
        key: '2-2',
        name: '2. Đảm bảo thời gian quy định cho mỗi phần',
        weight: 10,
        max: 15,
        scores: {
          'Nguyễn Văn Luận': <Select options={scoreOptions} />,
        },
      },
      {
        key: '2-3',
        name: '3. Thái độ học tập, tiếp thu',
        weight: 10,
        max: 15,
        scores: {
          'Nguyễn Văn Luận': (
            <Select
              options={[
                { label: 'Xuất sắc', value: 'excellent' },
                { label: 'Tốt', value: 'good' },
                { label: 'Trung bình', value: 'average' },
              ]}
            />
          ),
          'Trần Minh Cường': 'Tốt',
        },
      },
    ],
  },
];

const RankPoint = ({ isModalOpen, setIsModalOpen, studentInfo }: any) => {
  const columns: any[] = [
    {
      title: 'Tiêu chí đánh giá',
      dataIndex: 'name',
      width: 280,
      render: (text: string, record: any) => (
        <span style={{ fontWeight: record.children ? 600 : 400 }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Trọng số (%)',
      dataIndex: 'weight',
      width: 110,
      align: 'center',
    },
    {
      title: 'Điểm tối đa',
      dataIndex: 'max',
      width: 110,
      align: 'center',
    },
    ...reviewers.map((r) => ({
      title: r,
      dataIndex: ['scores', r],
      width: 160,
      align: 'center',
    })),
    {
      title: 'Nhận xét',
      width: 200,
      render: () => <Input />,
    },
  ];

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      width={1200}
      footer={null}
      title={`Chấm điểm cho ${studentInfo.ten}`}
    >
      <Card title="Thông tin sinh viên" bordered={false} className='rounded-xl'>
        <Row gutter={[24, 12]}>
          <Col span={8}>
            <b className='text-[#64748B]'>Tên sinh viên</b>
            <div className='text-[#1E293B] font-semibold text-lg'>{studentInfo.ten}</div>
          </Col>
          <Col span={8}>
            <b className='text-[#64748B]'>Mã sinh viên</b>
            <div className='text-[#1E293B] font-semibold text-base'>{studentInfo.ma}</div>
          </Col>
          <Col span={8}>
            <b className='text-[#64748B]'>Nhóm thực tập</b>
            <div className='text-[#1E293B] font-semibold text-base'>Nhóm IT Tsubasa 01</div>
          </Col>


          <Col span={8}>
            <b className='text-[#64748B]'>Chu kỳ đánh giá</b>
            <div className='text-[#1E293B] font-semibold text-base'>Đánh giá tuần 1-2</div>
          </Col>
          <Col span={8}>
            <b className='text-[#64748B]'>Thời gian</b>
            <div className='text-[#1E293B] font-semibold text-base'>{studentInfo.ngayChamDiem}</div>
          </Col>
          <Col span={8}>
            <b className='text-[#64748B]'>Bộ tiêu chí đánh giá</b>
            <div className='text-[#1E293B] font-semibold text-base'>Đánh giá đợt 1</div>
          </Col>
        </Row>
      </Card>


      <div className='p-2 bg-white rounded-xl mt-4'>
        <div className='m-4 flex justify-between'>
          <b className='text-[#1E293B] font-semibold text-base'>Thông tin người chấm</b>
          <span className='text-[#1E293B] font-semibold text-base'>Giảng viên: Nguyễn Văn Luận</span>
        </div>
      </div>

      <Card style={{ marginTop: 16 }} title="Danh sách người đã chấm">
        <Table
          pagination={false}
          dataSource={[
            {
              key: 1,
              name: 'Nguyễn Văn Luận',
              date: '18/11/2025',
              score: '90/100',
              status: <Tag color="blue">Bản nháp</Tag>,
            },
            {
              key: 2,
              name: 'Trần Minh Cường',
              date: '18/11/2025',
              score: '88/100',
              status: <Tag color="green">Đã hoàn thành</Tag>,
            },
          ]}
          columns={[
            { title: 'Tên người chấm', dataIndex: 'name' },
            { title: 'Ngày chấm', dataIndex: 'date' },
            { title: 'Tổng điểm', dataIndex: 'score' },
            { title: 'Trạng thái', dataIndex: 'status' },
            {
              title: '',
              render: () => <Button type="link">Xem chi tiết</Button>,
            },
          ]}
        />
      </Card>

      <Card style={{ marginTop: 16 }} title="Chấm điểm">
        <Table
          bordered={false}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          expandable={{
            defaultExpandAllRows: true,
          }}
        />
      </Card>

      <Row justify="space-between" style={{ marginTop: 24 }}>
        <button className='w-[18%] h-12 bg-[#fdf6f7] rounded-3xl text-[#AB1F24] font-semibold text-base border-none'
          onClick={() => setIsModalOpen(false)}
        >
          Huỷ
        </button>
        <button className='w-[80%] h-12 bg-[#BC2228] rounded-3xl text-white font-semibold text-base border-none'
          onClick={() => setIsModalOpen(false)}
        >
          Lưu chấm điểm
        </button>
      </Row>
    </Modal>
  );
};

export default memo(RankPoint);
