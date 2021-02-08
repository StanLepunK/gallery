import React from 'react';
import PropTypes from 'prop-types';

Image.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
};

function Image(props) {
  return (
    <div className={`${props.className} image-container`}>
      <img src={props.url} className="image-grid" />
    </div>
    // <div className={`${props.className} image-container`}>
    //   <img src={props.url} className=“image-grid"/>
    // </div>
  );
}

export default Image;
