import React from 'react';

import { useContext } from 'react';
import { Context } from '../KnupelContext';

import ItemCart from '../components/ItemCart';
import Order from '../components/Order';

import PropTypes from 'prop-types';

Cart.propTypes = {
  cart_items: PropTypes.array.isRequired,
  price: PropTypes.number,
};

function Cart() {
  const { cart_items } = useContext(Context);
  let total = 0;
  for (let i = 0; i < cart_items.length; i++) {
    total += cart_items[i].price;
  }
  const total_ret = total.toLocaleString('fr-EU', {
    style: 'currency',
    currency: 'EUR',
  });

  const ret = cart_items.map((elem) => <ItemCart key={elem.id} elem={elem} />);

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {ret}
      <p className="total-cost">Total: : {total_ret}</p>
      <Order />
    </main>
  );
}

export default Cart;

// function Cart() {
//   const { cart_items } = useContext(Context);
//   const total = 0;

//   const ret = cart_items.map((elem) => <ItemCart key={elem.id} elem={elem} />);
//   // function content() {
//   //   console.log('cart length', cart_items.length);
//   //   // eslint-disable-next-line react/jsx-key
//   //   // return cart_items.map((elem) => <ItemCart key={elem.id} elem={elem} />);
//   //   return ret;
//   // }

//   // // console.log('cart length', cart_items.length);
//   // function show_cart() {
//   //   if (typeof cart_items !== 'undefined' && cart_items.length > 0)
//   //     return content();
//   //   else return <h1>Your cart is empty</h1>;
//   // }
//   return (
//     <main className="cart-page">
//       <h1>Check out</h1>
//       {ret}
//       <p className="total-cost">Total: </p>
//       <div className="order-button">
//         <button>Place Order</button>
//       </div>
//       {/* {show_cart()} */}
//     </main>
//   );
// }

// export default Cart;

// function Cart() {
//   const { cart_items } = useContext(Context);
//   if (typeof cart_items === 'array') {
//     console.log(' is an array');
//   } else if (typeof cart_items === 'object') {
//     console.log(' is an object');
//   } else console.log(' is a truc');
//   // eslint-disable-next-line react/jsx-key
//   // const content = cart_items.map((elem, i) => <h2>{elem.id}</h2>);
//   // // const content = cart_items.map((elem) => <h2>{elem.id}</h2>);

//   function content() {
//     // eslint-disable-next-line react/jsx-key
//     // return cart_items.map((elem) => <h2>{elem.id}</h2>);

//     // eslint-disable-next-line react/jsx-key
//     return cart_items.map((elem) => <ItemCart key={elem.id} elem={elem} />);

//     // for unkown reason I must use this method because my array is transform to an object.
//     // const list = [];
//     // for (let i = 0; i < cart_items.length; i++) {
//     //   list.push(<h2>{cart_items[i].id}</h2>);
//     // }
//     // return <div>{list}</div>;
//   }

//   function show_cart() {
//     if (typeof cart_items !== 'undefined' && cart_items.length > 0)
//       return content();
//     else return <h1>Your cart is empty</h1>;
//   }
//   return (
//     <main className="cart-page">
//       <h1>Check out</h1>
//       {show_cart()}
//     </main>
//   );
// }

// export default Cart;
