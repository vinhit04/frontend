import { Card, Progress, Table } from 'antd'
import React, { useState } from 'react'

type Props = {}

const CyclicalPoints = (props: Props) => {
   
    const columns = [
        {
            title: "Tên tiêu chí",
            dataIndex: "name",
            key: "name",
            render: (text: string) => (
                <span className="font-medium">{text}</span>
            ),
        },
        {
            title: "Điểm trung bình",
            dataIndex: "avg",
            key: "avg",
        },
        {
            title: "Điểm tối đa",
            dataIndex: "max",
            key: "max",
        },
        {
            title: "Nguyễn Văn Luận",
            dataIndex: "luan",
            key: "luan",
        },
        {
            title: "Trần Minh Cường",
            dataIndex: "cuong",
            key: "cuong",
        },
        {
            title: "Nguyễn Xuân Bách",
            dataIndex: "bach",
            key: "bach",
        },
        {
            title: "Tỷ lệ (%)",
            dataIndex: "ratio",
            key: "ratio",
        },
    ];
    const dataSource = [
        {
            key: "1",
            name: "Chuẩn bị",
            avg: "88.5/100",
            max: 100,
            luan: 80,
            cuong: 95,
            bach: 95,
            ratio: 10,
            detail: [
                {
                    teacher: "Nguyễn Văn Luận",
                    comment: "Chuẩn bị cẩn thận, chi tiết",
                },
                {
                    teacher: "Trần Minh Cường",
                    comment: "Có sự chuẩn bị đầy đủ tài liệu thuyết trình",
                },
            ],
        },
        {
            key: "2",
            name: "Thuyết trình",
            avg: "88.5/100",
            max: 100,
            luan: 80,
            cuong: 95,
            bach: 95,
            ratio: 10,
        },
        {
            key: "3",
            name: "1. Thuyết trình rõ ràng, lưu loát",
            avg: "88.5/100",
            max: 100,
            luan: 80,
            cuong: 95,
            bach: 95,
            ratio: 5,
        },
        {
            key: "4",
            name: "2. Đảm bảo thời gian quy định",
            avg: "88.5/100",
            max: 100,
            luan: 80,
            cuong: 80,
            bach: 80,
            ratio: 5,
        },
    ];

    const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
    return (
        <div>
            <span
                className=" text-sm cursor-pointer flex items-center gap-1" >
                Đánh giá <span className="text-gray-400">{'>'}</span> Chi tiết chu kỳ
                <span className="text-gray-400">{'>'}</span> Chi tiết điểm theo chu kỳ
            </span>
            <h1 className="text-2xl font-semibold my-2">Chi tiết điểm theo chu kỳ</h1>

            <Card style={{ marginBottom: '30px' }}>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        Thông tin chung
                    </h2>
                    <div className="border-b border-gray-200 mb-4" />
                    <div className="flex items-start gap-64">
                        <div>
                            <span className="text-sm text-gray-500">Tên sinh viên</span>
                            <h2 className="text-lg font-semibold text-gray-800">
                                Tên sinh viên
                            </h2>
                        </div>

                        <div>
                            <span className="text-sm text-gray-500">Chu ký đánh giá hiện tại</span>
                            <h2 className="text-lg font-semibold text-gray-800">
                                18/11/2025 - 18/11/2025
                            </h2>
                        </div>
                        <div>
                            <span className="text-sm text-gray-500 block mb-1">
                                Bộ tiêu chí
                            </span>
                            <span>Đánh giá đợt 1</span>
                            <span className=" inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                             text-purple-700 bg-purple-100">
                                Global
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card style={{ marginBottom: '30px' }}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Progress
                            type="circle"
                            percent={92}
                            strokeWidth={8}
                            width={120}
                            strokeColor="#4C59D9" 
                        />

                        <div>
                            <p className="text-gray-500">Tổng điểm trung bình</p>
                            <h2 className="text-3xl font-semibold text-[#4C59D9]">
                                92/100
                            </h2>

                            <p className="text-gray-500 mt-2">Chu kỳ đánh giá:</p>
                            <p className="font-medium">Đánh giá tuần 1-2</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 mb-1">Trạng thái:</p>
                        <span
                            className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium text-sm" >
                            Đã hoàn thành
                        </span>
                    </div>

                </div>
            </Card>

            <Card>
                <h2 className="text-lg font-semibold mb-4">
                    Điểm chi tiết
                </h2>

                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                    bordered
                    expandable={{
                        expandedRowRender: (record: any) => (
                            <div className="pl-6">
                                {record.detail.map((item: any, index: number) => (
                                    <div
                                        key={index}
                                        className="border-l-4 border-black-500 pl-4 mb-3"
                                    >
                                        <p className="font-medium">
                                            {item.teacher}:
                                        </p>
                                        <p className="text-gray-600">
                                            {item.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ),
                        expandIcon: () => null,
                        expandedRowKeys,
                        rowExpandable: (record) => record.detail?.length > 0,
                    }}
                    onRow={(record) => ({
                        onClick: () => {
                          const isExpanded = expandedRowKeys.includes(record.key);
                          setExpandedRowKeys(
                            isExpanded
                              ? expandedRowKeys.filter((key) => key !== record.key)
                              : [...expandedRowKeys, record.key]
                          );
                        },
                      })}
                />
            </Card>

        </div>
    )
}

export default CyclicalPoints