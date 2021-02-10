import React from 'react';

import PropTypes from 'prop-types';

ItemCart.propTypes = {
  id: PropTypes.string,
  elem: PropTypes.object,
};

function ItemCart(props) {
  return (
    <div className="cart-item">
      {/* <h2>{props.elem.id}</h2>; */}
      <img src={props.elem.url} width="130px" />
      <p>{props.elem.price} €</p>
    </div>
  );
}

export default ItemCart;
