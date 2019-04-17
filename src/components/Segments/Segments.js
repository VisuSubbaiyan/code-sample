import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { renderItems } from '../../utils/renderUtil.js';

import data from '../../data.json';
import './Segments.css';

class Segments extends Component {
  state = {...data}

  render() {
    const { segments, origin_iata, destination_iata} = this.state;
    return (
      <div className="segments">
        <h2 className="sub-heading">{`${origin_iata} - ${destination_iata}`}</h2>
        {renderItems(segments)}
      </div>
    )
  }
}

export default Segments;
