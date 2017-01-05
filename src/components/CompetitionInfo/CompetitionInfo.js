import React from 'react';
import './CompetitionInfo.css';

import { Card, Label } from 'semantic-ui-react';

const CompetitionInfo = ({profile, heroes, time}) => {

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
    <Card className="CompetitionInfo">
      <Label attached="top">경쟁전</Label>
      <Card.Content>
        <Card.Header>
          <b>랭크: </b>
          <span>{profile.competitive.rank}</span>
        </Card.Header>
        <Card.Header>
          <b>승리: </b>
          <span>{profile.games.competitive.wins}</span>
        </Card.Header>
        <Card.Header>
          <b>패배: </b>
          <span>{profile.games.competitive.lost}</span>
        </Card.Header>
        <Card.Header>
          <b>치룬 경기: </b>
          <span>{profile.games.competitive.played}</span>
        </Card.Header>
        <Card.Header>
          <b>플레이시간: </b>
          <span>{profile.playtime.competitive}</span>
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
          <b>상위 영웅</b>
        </Card.Header>
        {mapToRank}
      </Card.Content>
    </Card>
  );
};

export default CompetitionInfo;