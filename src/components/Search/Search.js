import React, { Component } from 'react';
import { Input, Button, Label, Form } from 'semantic-ui-react'
import './Search.css';

import alert from 'alertifyjs';

//const Search = ({onGetProfile}) => {
class Search extends Component {

  static propTypes = {
    onGetProfile: React.PropTypes.func.isRequired,
    //searching: React.PropTypes.bool.isRequired
  };

  state = {
    tag: ''
  };

  handleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      this.handleSearch();
    }
  }

  handleSearch = (e) => {
    e.preventDefault();

    const tag = this.state.tag;

    if (!tag) {
      alert.error('배틀태그를 입력해 주세요!');
      return;
    }

    this.props.onGetProfile(tag);
  }

  render() {
    return (
      <div id="Search">
        <Form onSubmit={this.handleSearch}>
          <Form.Field>
            <Input
              name="tag"
              disabled={this.props.searching}
              action={{ color: 'orange', content: '검색' }}
              placeholder='배틀태그#1234'
              value={this.state.tag}
              onChange={this.handleChange} />
          </Form.Field>
        </Form>
      </div>
    );
  }
};

export default Search;