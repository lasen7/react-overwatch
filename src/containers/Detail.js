import React, { Component } from 'react';
import { DetailWrapper, UserInfo, QuickInfo, CompetitionInfo, Spinner } from 'components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { browserHistory } from 'react-router';

import * as action from 'actions/action';

import alert from 'alertifyjs';

class Detail extends Component {

  state = {
    initialLoading: false
  };

  async componentDidMount() {
    const errorHandler = () => {
      alert.error('배틀태그를 확인하고 다시 시도해 주세요!');
      browserHistory.push('/');
    };

    const paths = location.href.split('/detail/');
    if (paths.length !== 2) {
      errorHandler();
      return;
    }

    try {
      let tag = paths[1];
      tag = tag.replace('#', '-');

      const result = await this.props.Actions.getProfile({ tag });
      if (result.value.data.statusCode) {
        // 404 error
        errorHandler();
        return;
      }

      await this.props.Actions.getHeroes({ tag, mode: 'competitive' });
      await this.props.Actions.getHeroes({ tag, mode: 'quickplay' });
      await this.props.Actions.getAllHeroes({ tag, mode: 'competitive' });
      await this.props.Actions.getAllHeroes({ tag, mode: 'quickplay' });

      this.setState({
        initialLoading: true
      });

    } catch (e) {
      errorHandler();
      return;
    }
  }

  render() {
    const {
      profile,
      heroesOfCompetition,
      heroesOfQuick,
      allHeroesOfCompetition,
      allHeroesOfQuick } = this.props.status;

    if (!this.state.initialLoading) {
      return (
        <Spinner />
      );
    }

    return (
      <div>
        <DetailWrapper>
          <UserInfo
            avatar={profile.avatar}
            username={profile.username}
            level={profile.level}
            />
          <QuickInfo
            profile={profile}
            heroes={heroesOfQuick}
            time={allHeroesOfQuick}
            />
          <CompetitionInfo
            profile={profile}
            heroes={heroesOfCompetition}
            time={allHeroesOfCompetition}
            />
        </DetailWrapper>
      </div>
    );
  }
};

Detail = connect(state => {
  return {
    status: {
      profile: state.profile.data,
      searching: state.requests.profile.fetching,
      heroesOfCompetition: state.heroes.dataOfCompetition,
      heroesOfQuick: state.heroes.dataOfQuick,
      allHeroesOfCompetition: state.allHeroes.competition,
      allHeroesOfQuick: state.allHeroes.quick,
    }
  }
}, dispatch => {
  return {
    Actions: bindActionCreators({
      getProfile: action.getProfile,
      getHeroes: action.getHeroes,
      getAllHeroes: action.getAllHeroes
    }, dispatch)
  }
})(Detail);

export default Detail;