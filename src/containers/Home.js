import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import { Logo, Search } from 'components';

//import alert from 'alertifyjs';

class Home extends Component {

  handleGetProfile = (tag) => {
    // try {
    //   const _tag = tag.replace('#', '-');

    //   const {profile} = this.props.status;
    //   const result = await this.props.Actions.getProfile({ tag: _tag });
    //   if (result.value.data.statusCode) {
    //     // 404 error
    //     alert.error('아이디를 확인하고 다시 시도해 주세요!');
    //     return;
    //   }

    //   browserHistory.push(`/detail/${tag}`);
    // } catch (e) {
    //   alert.error('아이디를 확인하고 다시 시도해 주세요!');
    // }

    // const _tag = tag.replace('#', '-');

    browserHistory.push(`/detail/${tag}`);
  }

  render() {
    return (
      <div>
        <Logo />
        <Search
          onGetProfile={this.handleGetProfile} />
      </div>
    );
  }
};

export default Home;