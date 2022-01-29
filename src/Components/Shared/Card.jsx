import React from 'react';
import PropTypes from 'prop-types';


const Card = ({children, reverse}) => {
  return <div className='card' style={{ 
  background: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  color: reverse ? '#fff' : '#000'

  }}>{children}
  </div>;
};
Card.defaultProps ={
  reverse: false
}

Card.protoTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired
}
export default Card;
