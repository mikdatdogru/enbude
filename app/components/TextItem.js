import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({ text }) => {
  return (
    <div className="textItem">
      <span>{text}</span>
    </div>
  );
};

TextItem.propTypes = {};
TextItem.defaultProps = {};

export default TextItem;
