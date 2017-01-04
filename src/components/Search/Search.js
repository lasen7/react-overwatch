import React from 'react';
import { Input, Button } from 'semantic-ui-react'
import './Search.css';

const Search = () => {

  return (
    <div id="Search">
      <Input type="text" placeholder="Search..." action>
        <input />
        <Button type="submit" color="orange">검색</Button>
      </Input>
    </div>
  );
};

export default Search;