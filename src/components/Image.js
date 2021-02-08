import React from 'react';
import PropTypes from 'prop-types';

Image.propTypes = {
  className: PropTypes.string,
  elem: PropTypes.Object,
};

function Image(props) {
  return (
    <div className={`${props.className} image-container`}>
      <img src={props.elem.url} className={props.className} />
    </div>
    // <div className={`${props.className} image-container`}>
    //   <img src={props.url} className=“image-grid"/>
    // </div>
  );
}

export default Image;
