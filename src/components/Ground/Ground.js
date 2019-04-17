import React from 'react';
// import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import TimeDisplay from '../TimeDisplay';

const Ground = props => (
  <div className={`segment ${props.className}`} >
    <TimeDisplay time={props.departure} />
    <div className="card">
      <IconButton icon="bus" />
      <div className="title">
        <div>{'Pick up from '}</div>
        <span className="highlight">{props.origin.value}</span>
      </div>
    </div>
  </div>
);

export default Ground;
