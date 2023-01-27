import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => <div className="border-gray-400 rounded border w-full h-full bg-[#fbfbfb]">{children}</div>;

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
