import React from 'react';
import './QuickInfo.css';

import { Card, Label } from 'semantic-ui-react';

const QuickInfo = ({profile, heroes, time}) => {

  const mapToRank = heroes.map((hero, index) => {
    if (hero.percentage > 0) {
      return (
        <Card.Header key={index}>
          <b>{index + 1}위: </b>
          <span>{hero.name}</span>
        </Card.Header>
      );
    } else {
      return null;
    }
  });

  return (
    <Card className="QuickInfo">
      <Label attached="top">빠른 대전</Label>
      <Card.Content>
        <Card.Header>
          <b>플레이시간: </b>
          <span>{profile.playtime.quick}</span>
        </Card.Header>
        <Card.Header>
          <b>폭주시간: </b>
          <span>{time.fireTime}</span>
        </Card.Header>
        <Card.Header>
          <b>임무기여시간: </b>
          <span>{time.objectiveTime}</span>
        </Card.Header>
        <Card.Header>
          <b>상위영웅</b>
        </Card.Header>
        {mapToRank}
      </Card.Content>
    </Card>
  );
};

export default QuickInfo;