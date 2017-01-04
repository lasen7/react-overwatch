import React from 'react';
import './CompetitionInfo.css';

import { Card, Label } from 'semantic-ui-react';

const CompetitionInfo = () => {
  return (
    <Card className="CompetitionInfo">
      <Label attached="top">경쟁전</Label>
      <Card.Content>
        <Card.Header>
          <b>랭크: </b>
          <span>1262</span>
        </Card.Header>
        <Card.Header>
          <b>승리: </b>
          <span>16</span>
        </Card.Header>
        <Card.Header>
          <b>패배: </b>
          <span>25</span>
        </Card.Header>
        <Card.Header>
          <b>치룬 경기: </b>
          <span>41</span>
        </Card.Header>
        <Card.Header>
          <b>플레이시간: </b>
          <span>7시간</span>
        </Card.Header>
        <Card.Header>
          <b>폭주시간: </b>
          <span>1시간</span>
        </Card.Header>
        <Card.Header>
          <b>임무기여시간: </b>
          <span>36분</span>
        </Card.Header>
        <Card.Header>
          <b>상위 영웅</b>
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

export default CompetitionInfo;