import React from 'react';
import PropsTypes from 'prop-types';

const IconButton = props => (
  <div onClick={props.onClick}>
    <i className={`fa fa-${props.icon}`}></i>
  </div>
);

IconButton.propTypes = {
  icon: PropsTypes.string.isRequired
}

export default IconButton;
