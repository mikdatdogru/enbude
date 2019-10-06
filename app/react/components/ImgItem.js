import React from 'react';
import PropTypes from 'prop-types';

const ImgItem = ({ img }) => {
  return (
    <div className="imgItem">
      <img src={img} alt="img" />
      <span>Image Data</span>
    </div>
  );
};

ImgItem.propTypes = {};
ImgItem.defaultProps = {};

export default ImgItem;
