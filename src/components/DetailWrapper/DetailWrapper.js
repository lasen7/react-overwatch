import React from 'react';
import './DetailWrapper.css';

import { Container } from 'semantic-ui-react';

const DetailWrapper = ({children}) => {
  return (
    <div className="DetailWrapper">
      {children}
    </div>
  );
};

export default DetailWrapper;