import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ children }) => (
  <span className="react-date-picker__inputGroup__divider">
    {children}
  </span>
);

Divider.propTypes = {
  children: PropTypes.node,
};

export default Divider;
