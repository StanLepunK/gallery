import React from 'react';
import { useContext } from 'react';
import { Context } from '../KnupelContext';

import PropTypes from 'prop-types';

ItemCart.propTypes = {
  id: PropTypes.string,
  elem: PropTypes.object,
  price: PropTypes.number,
};

function ItemCart(props) {
  const { remove_items } = useContext(Context);
  return (
    <div className="cart-item" onClick={() => remove_items(props.elem.id)}>
      {/* <h2>{props.elem.id}</h2>; */}
      <img src={props.elem.url} width="130px" />
      <p>{props.elem.price} €</p>
    </div>
  );
}

export default ItemCart;
