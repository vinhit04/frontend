import { memo } from 'react';
import React from 'react';
import { } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Card, Progress, Table} from 'antd';
type Props = {};
const AIAutoPoint = (props : Props) => {
     const { id } = useParams<{ id: any }>();
     const [student, setStudent] = useState<any>({});
     console.log(id)
     const columns = [
         {
             title: "Tên tiêu chí",
             dataIndex: "name",
             key: "name",
             render: (text: string) => <span className="font-medium">{text}</span>,
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
     const getStudent = async (id: string) => {
         const res = await fetch(`http://localhost:4000/students/${id}`);
         const data = await res.json();
         setStudent(data);
         return data;
     };
     console.log("student", student);
 
     const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
       const [percent, setPercent] = useState(0);
 
       useEffect(() => {
         if (student?.diem !== undefined) {
           setTimeout(() => {
             setPercent(student.diem * 10);
           }, 1500);
         }
       }, [student]);
     useEffect(()=> {getStudent(id)},[id])
   return (
     <div>
       <span className=" text-sm cursor-pointer flex items-center gap-1">
         Đánh giá <span className="text-gray-400">{">"}</span> Chi tiết chu kỳ
         <span className="text-gray-400">{">"}</span>AI chấm điểm tự động
       </span>
       <h1 className="text-2xl font-semibold my-2">AI chấm điểm tự động</h1>

       <Card style={{ marginBottom: "30px" }}>
         <div>
           <h2 className="text-xl font-semibold text-gray-800 mb-3">
             Thông tin chung
           </h2>
           <div className="border-b border-gray-200 mb-4" />
           <div className="flex items-start gap-64">
             <div>
               <span className="text-sm text-gray-500">Tên sinh viên</span>
               <h2 className="text-lg font-semibold text-gray-800">
                 {student?.ten}
               </h2>
             </div>
             <div>
               <span className="text-sm text-gray-500">
                 Chu ký đánh giá hiện tại
               </span>
               <h2 className="text-lg font-semibold text-gray-800">
                 18/11/2025 - 18/11/2025
               </h2>
             </div>
             <div>
               <span className="text-sm text-gray-500 block mb-1">
                 Bộ tiêu chí
               </span>
               <span>Đánh giá đợt 1</span>
               <span
                 className=" inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                              text-purple-700 bg-purple-100"
               >
                 Global
               </span>
             </div>
           </div>
         </div>
       </Card>
       <Card style={{ marginBottom: "30px" }}>
         <div className="flex items-center justify-between">
           <div className="flex items-center gap-4">
             <Progress
               type="circle"
               percent={percent}
               strokeWidth={13}
               width={120}
               strokeColor="#4C59D9"
               showInfo={false}
             />
             <div>
               <p className="text-gray-500 mb-1">Tổng điểm trung bình:</p>
               <h2 className="text-3xl font-semibold text-[#4C59D9]">
                 {student?.diem * 10}/100
               </h2>
               <p className="text-gray-500 mt-2">Chu kỳ đánh giá:</p>
               <p className="font-medium">Đánh giá tuần 1-2</p>
             </div>
           </div>
           <div>
             <p className="text-gray-500 mb-1">Trạng thái:</p>
             <span className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium text-sm">
               Đã hoàn thành
             </span>
           </div>
         </div>
       </Card>

       <Card>
         <h2 className="text-lg font-semibold mb-4">Điểm chi tiết</h2>
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
                     <p className="font-medium">{item.teacher}:</p>
                     <p className="text-gray-600">{item.comment}</p>
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
                   : [...expandedRowKeys, record.key],
               );
             },
           })}
         />
       </Card>
       <div className="flex mt-4 gap-4">
         <div className="bg-white p-4 rounded-2xl">
           <h2 className="text-xl font-semibold mt-6 mb-4 pb-4 border-b-2 border-gray-400">
             Gợi ý cải thiện
           </h2>
           <div className="mt-4">
             Lorem ipsum dolor sit amet consectetur. Diam sapien egestas
             volutpat pharetra eget. Nulla sed ac ut ullamcorper. Fringilla
             aliquam amet sed laoreet elit mattis dignissim pharetra pharetra.
           </div>
         </div>
         <div className="bg-white p-4 rounded-2xl">
           <h2 className="text-xl font-semibold mt-6 mb-4 pb-4 border-b-2 border-gray-400">
             So sánh với chu kỳ trước
           </h2>
           <div className="mt-4">
             Lorem ipsum dolor sit amet consectetur. Diam sapien egestas
             volutpat pharetra eget. Nulla sed ac ut ullamcorper. Fringilla
             aliquam amet sed laoreet elit mattis dignissim pharetra pharetra.
           </div>
         </div>
       </div>
       <div className="flex justify-end gap-4 mt-6">
       <button className="bg-gray-50 rounded-2xl py-2 px-4 text-gray-700 ">
         Chỉnh sửa thông tin
       </button>
        <button className="bg-red-50 rounded-2xl py-2 px-4 text-red-700">
         Từ chối
       </button>
        <button className="bg-blue-50 rounded-2xl py-2 px-4 text-blue-700">
         Chấp nhận
         </button>
         </div>
     </div>
   );
 };

export default memo(AIAutoPoint);