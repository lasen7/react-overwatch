import React from 'react';
import './UserInfo.css';

import { Card, Image, Label } from 'semantic-ui-react';

const UserInfo = ({avatar, username, level}) => {

  return (
    <Card className="UserInfo">
      <Label attached="top">프로필</Label>
      <Image
        className="UserInfo-img"
        src={avatar} />
      <Card.Content>
        <Card.Header>
          <b>이름: </b>
          <span>{username}</span>
        </Card.Header>
        <Card.Header>
          <b>레벨: </b>
          <span>{level}</span>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default UserInfo;