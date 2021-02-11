import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../KnupelContext';

import PropTypes from 'prop-types';

import useOver from '../hooks/useOver';

ItemCart.propTypes = {
  id: PropTypes.string,
  elem: PropTypes.object,
  price: PropTypes.number,
};

function ItemCart(props) {
  //const [is, set_is] = useState(false);
  const [is, ref] = useOver();
  const { remove_items } = useContext(Context);
  return (
    <div
      className="cart-item"
      onClick={() => remove_items(props.elem.id)}
      ref={ref}
      // onMouseEnter={() => set_is(true)}
      // onMouseLeave={() => set_is(false)}
    >
      {is ? (
        <i className="ri-delete-bin-fill"></i>
      ) : (
        <i className="ri-delete-bin-line"></i>
      )}
      <img src={props.elem.url} width="130px" />
      <p>{props.elem.price} €</p>
    </div>
  );
}

export default ItemCart;

// ItemCart.propTypes = {
//   id: PropTypes.string,
//   elem: PropTypes.object,
//   price: PropTypes.number,
// };

// function ItemCart(props) {
//   const [is, set_is] = useState(false);
//   const { remove_items } = useContext(Context);
//   return (
//     <div
//       className="cart-item"
//       onClick={() => remove_items(props.elem.id)}
//       onMouseEnter={() => set_is(true)}
//       onMouseLeave={() => set_is(false)}
//     >
//       {is ? (
//         <i className="ri-delete-bin-fill"></i>
//       ) : (
//         <i className="ri-delete-bin-line"></i>
//       )}
//       <img src={props.elem.url} width="130px" />
//       <p>{props.elem.price} €</p>
//     </div>
//   );
// }

// export default ItemCart;
