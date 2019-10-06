import React from 'react';

const TextItem = ({ text }) => {
  const trimmedText = text.trim();
  let newText = trimmedText.substr(0, 20);

  if (trimmedText.length > 20) {
    newText += '...';
  }

  return (
    <div className="textItem">
      <span>{newText}</span>
    </div>
  );
};

TextItem.propTypes = {};
TextItem.defaultProps = {};

export default TextItem;
