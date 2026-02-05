import { Button, Modal } from 'antd';
import { memo } from 'react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
type Props = { isModalOpen: boolean, setIsModalOpen: (r: boolean) => void };
const RankPoint = ({ isModalOpen, setIsModalOpen }: Props) => {
  const { id } = useParams<{ id: any }>();
  const [student, setStudent] = useState<any>({});
  console.log(id);
  const handleOk = () => {

  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal
        title="Chấm điểm cho"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Thông tin sinh viên</p>
      
      </Modal>
    </>
  );
};

export default memo(RankPoint);