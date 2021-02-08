import React, { useState, useContext } from 'react';
import { Context } from '../KnupelContext';
import PropTypes from 'prop-types';

Image.propTypes = {
  className: PropTypes.string,
  elem: PropTypes.Object,
};

function Image(props) {
  const [is, set_is] = useState(false);
  // local style, not good
  // const [toggle_is, set_toggle_is] = useState(false);
  // console.log(is);
  const { toggle_like } = useContext(Context);
  // const toggle = (id) => {
  //   toggle_like(id);
  // };

  const heart_icon = is && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggle_like(props.elem.id)}
    ></i>
  );
  const cart_icon = is && <i className="ri-add-circle-line cart"></i>;

  // local style, not good
  // const toggle = () => {
  //   is ? set_toggle_is(true) : set_toggle_is(false);
  // };

  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={() => set_is(true)}
      onMouseLeave={() => set_is(false)}
      // onClick={toggle(props.elem.id)} // local style
      // onClick={() => toggle_like(props.elem.id)}
    >
      {heart_icon}
      {cart_icon}
      <img src={props.elem.url} className="image-grid"></img>
    </div>
    // <div className={`${props.className} image-container`}>
    //   <img src={props.elem.url} className="image-grid" />
    // </div>

    // <div className={`${props.className} image-container`}>
    //   <img src={props.url} className=“image-grid"/>
    // </div>
  );
}

export default Image;
