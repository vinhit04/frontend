
import React from "react";
import {
    AppstoreOutlined,
    FileDoneOutlined,
    FileTextOutlined,
    FolderOutlined,
    InfoCircleOutlined,
    TeamOutlined,
    WarningOutlined
} from "@ant-design/icons";
import DanhGia from "../pages/DanhGia";
export const menuItems = [
    { key: "space", icon: <AppstoreOutlined />, url: '/space', label: "Space" },
    {
        key: "project", icon: <FolderOutlined />,
        url: '/project',
        label: "Dự án"
    },
    {
        key: "info",
        icon: <InfoCircleOutlined />,
        url: '/info',
        label: "Thông tin chung",
    },
    { key: "student", icon: <TeamOutlined />, url: '/student', label: "Sinh viên" },
    {
        key: "daily-report",
        icon: <FileDoneOutlined />,
        url: '/report',
        label: "Báo cáo hằng ngày",
    },
    {
        key: "evaluation", icon: <FileTextOutlined />,
        url: '/evaluate',
        label: "Đánh giá",
        element: <DanhGia />
    },
    { key: "violation", icon: <WarningOutlined />, url: '/violation', label: "Vi phạm" },
]