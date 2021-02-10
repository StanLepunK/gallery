import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { Context } from '../KnupelContext';

import PropTypes from 'prop-types';

Header.propTypes = {
  cart_items: PropTypes.array.isRequired,
};

function Header() {
  const { cart_items } = useContext(Context);
  const res_cart = cart_items.length
    ? 'ri-shopping-cart-fill'
    : 'ri-shopping-cart-line';

  return (
    <header>
      <Link to="/">
        <h2>Knupel Art</h2>
      </Link>
      <Link to="/cart">
        <i className={`${res_cart} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

// other way
// function Header() {
//   const { cart_items } = useContext(Context);
//   console.log('cart_items', cart_items);
//   function show_cart() {
//     if (typeof cart_items !== 'undefined' && cart_items.length > 0)
//       return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
//     else return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
//   }

//   return (
//     <header>
//       <Link to="/">
//         <h2>Knupel Art</h2>
//       </Link>
//       <Link to="/cart">{show_cart()}</Link>
//     </header>
//   );
// }

export default Header;
