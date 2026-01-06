import React from "react";
type Props = {
  status: any;
}
function StatusTag({ status }:Props) {
  if (status === "upcoming") {
    return (
      <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
        Sắp diễn ra
      </span>
    );
  }
  if (status === "running") {
    return (
      <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
        Đang diễn ra
      </span>
    );
  }
  return (
    <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-600">
      Đã kết thúc
    </span>
  );
}
export default StatusTag;

