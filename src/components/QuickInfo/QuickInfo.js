import React from 'react';
import './QuickInfo.css';

import { Card, Label } from 'semantic-ui-react';

const QuickInfo = () => {
  return (
    <Card className="QuickInfo">
      <Label attached="top">빠른 대전</Label>
      <Card.Content>
        <Card.Header>
          <b>플레이시간: </b>
          <span>28시간</span>
        </Card.Header>
        <Card.Header>
          <b>폭주시간: </b>
          <span>4시간</span>
        </Card.Header>
        <Card.Header>
          <b>임무기여시간: </b>
          <span>28시간</span>
        </Card.Header>
        <Card.Header>
          <b>상위영웅</b>
        </Card.Header>
        <Card.Header>
          <b>1위: </b>
          <span>로드호그</span>
        </Card.Header>
        <Card.Header>
          <b>2위: </b>
          <span>바스티온</span>
        </Card.Header>
        <Card.Header>
          <b>3위: </b>
          <span>파라</span>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default QuickInfo;