import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import './Header.css';

const Header = props => (
  <header className="header">
    <IconButton icon="angle-left" onClick={() => null} />
    <h1 className="heading">{props.heading}</h1>
  </header>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired
}


export default Header;
