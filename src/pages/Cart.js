import React from 'react';

import { useContext } from 'react';
import { Context } from '../KnupelContext';

import ItemCart from '../components/ItemCart';

import PropTypes from 'prop-types';

Cart.propTypes = {
  cart_items: PropTypes.array.isRequired,
};

function Cart() {
  const { cart_items } = useContext(Context);
  if (typeof cart_items === 'array') {
    console.log(' is an array');
  } else if (typeof cart_items === 'object') {
    console.log(' is an object');
  } else console.log(' is a truc');
  // eslint-disable-next-line react/jsx-key
  // const content = cart_items.map((elem, i) => <h2>{elem.id}</h2>);
  // // const content = cart_items.map((elem) => <h2>{elem.id}</h2>);

  function content() {
    // eslint-disable-next-line react/jsx-key
    // return cart_items.map((elem) => <h2>{elem.id}</h2>);

    // eslint-disable-next-line react/jsx-key
    return cart_items.map((elem) => <ItemCart key={elem.id} elem={elem} />);

    // for unkown reason I must use this method because my array is transform to an object.
    // const list = [];
    // for (let i = 0; i < cart_items.length; i++) {
    //   list.push(<h2>{cart_items[i].id}</h2>);
    // }
    // return <div>{list}</div>;
  }

  function show_cart() {
    if (typeof cart_items !== 'undefined' && cart_items.length > 0)
      return content();
    else return <h1>Your cart is empty</h1>;
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {show_cart()}
    </main>
  );
}

export default Cart;
