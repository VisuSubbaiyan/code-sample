import React from 'react';
// import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import TimeDisplay from '../TimeDisplay';

import './BoardingPass.css';

const BoardingPass = props => (
  <div className="segment" >
    <TimeDisplay time={props.departure} />
    <div className="card boarding-pass">
      <div className="flight-details">
        <div>{props.detail.flight_number}</div>
        <div className="boarding-time">
          <TimeDisplay time={props.departure} />
        </div>
      </div>
      <div className="boarding-details">
        <h2>{props.origin.value}</h2>
        <IconButton icon="plane" />
        <h2>{props.destination.value}</h2>
      </div>
      <div className="gate-details">
        <span>{`Gate ${props.detail.gate}`}</span>
        <span>{`Seat ${props.detail.seat}`}</span>
        <span className="ontime">{'OnTime'}</span>
      </div>
    </div>
  </div>
);

export default BoardingPass;
