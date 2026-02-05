import { Modal } from 'antd';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
type Props = { isModalOpen: boolean, setIsModalOpen: (r: boolean) => void };
const RankPoint = ({ isModalOpen, setIsModalOpen }: Props) => {
  const { id } = useParams<{ id: any }>();
  const [student, setStudent] = useState<any>({});
  console.log(id);
  const handleOk = (Props: props) => {
    setIsModalOpen(true);

  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Modal
        
        title={`Chấm điểm cho Bùi Văn Thái`}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Thông tin sinh viên:{student?.id}</p>
        <p>{student?.id}</p>
      </Modal>
    </>
  );
};

export default memo(RankPoint);
