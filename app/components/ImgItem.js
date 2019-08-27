import React from 'react';
import PropTypes from 'prop-types';

const ImgItem = ({ img }) => {
  return (
    <div className="imgItem">
      <img src={img} alt="img" />
      Image Data!
    </div>
  );
};

ImgItem.propTypes = {};
ImgItem.defaultProps = {};

export default ImgItem;
