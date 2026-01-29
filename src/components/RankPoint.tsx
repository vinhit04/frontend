import { memo } from 'react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
type Props = {};
const RankPoint = ( props : Props ) => {
const {id} = useParams<{id: any}>();
    const [student, setStudent] = useState<any>({});
    console.log(id);

  return (
    <div>
      <h2>RankPoint</h2>
    </div>
  );
};

export default memo(RankPoint);