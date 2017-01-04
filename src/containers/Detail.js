import React from 'react';
import { DetailWrapper, UserInfo, QuickInfo, CompetitionInfo } from 'components';

const Detail = () => {
  return (
    <div>
      <DetailWrapper>
        <UserInfo />
        <QuickInfo />
        <CompetitionInfo />
      </DetailWrapper>
    </div>
  );
};

export default Detail;