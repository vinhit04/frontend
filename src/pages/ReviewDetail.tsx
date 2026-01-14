import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "antd";

const ReviewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <Button type="link" onClick={() => navigate(-1)}>
        ← Trở lại
      </Button>

      <h2 className="text-2xl font-semibold">Chi tiết chu kỳ #{id}</h2>

      <Card title="Thông tin chung">Nội dung chi tiết chu kỳ</Card>
    </div>
  );
};

export default ReviewDetail;