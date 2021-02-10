import React, { useState } from 'react';

import { useContext } from 'react';
import { Context } from '../KnupelContext';

import PropTypes from 'prop-types';

Image.propTypes = {
  className: PropTypes.string,
  elem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
  //elem: PropTypes.object,
};

function Image(props) {
  const [is, set_is] = useState(false);
  const { toggle_like, add_items, remove_items } = useContext(Context);

  function manage_items(elem) {
    const is = remove_items(elem.id);
    if (!is) add_items(elem);
  }

  // const cart_icon = is && <i className="ri-add-circle-line cart"></i>;
  function cart_icon(elem) {
    if (is)
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => manage_items(elem)}
        ></i>
      );
  }

  function heart_icon(is_like) {
    if (is_like) return <i className="ri-heart-fill favorite"></i>;
    else if (is) return <i className="ri-heart-line favorite"></i>;
    else return <div></div>;
  }

  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={() => set_is(true)}
      onMouseLeave={() => set_is(false)}
      onClick={() => toggle_like(props.elem.id)}
    >
      {heart_icon(props.elem.isFavorite)}
      {cart_icon(props.elem)}
      <img src={props.elem.url} className="image-grid"></img>
    </div>
  );
}

export default Image;
