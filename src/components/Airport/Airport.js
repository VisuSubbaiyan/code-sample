import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import TimeDisplay from '../TimeDisplay';

const Airport = props => (
  <div className="segment" >
    <TimeDisplay time={props.departure} />
    <div className="card">
      <IconButton icon="plane-departure" />
      <div className="title">
        <div>
          <span className="highlight">{props.origin.value}</span>
          {' Airport'}
        </div>
        <div className="terminal-details"><span className="highlight">{'Terminal C '}</span><span className="status-busy">{'Busy'}</span></div>
      </div>
    </div>
  </div>
);

Airport.propTypes = {
  origin: PropTypes.object.isRequired,
  departure: PropTypes.number.isRequired
}

export default Airport;
