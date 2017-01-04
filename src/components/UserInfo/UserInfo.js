import React from 'react';
import './UserInfo.css';

import { Card, Image, Label } from 'semantic-ui-react';

const UserInfo = () => {

  return (
    <Card className="UserInfo">
      <Label attached="top">프로필</Label>
      <Image
        className="UserInfo-img"
        src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
      <Card.Content>
        <Card.Header>
          <b>이름: </b>
          <span>HSPark</span>
        </Card.Header>
        <Card.Header>
          <b>레벨: </b>
          <span>55</span>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default UserInfo;