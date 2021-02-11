import React, { useState } from 'react';

import { useContext } from 'react';
import { Context } from '../KnupelContext';

function Order() {
  const [is, set_is] = useState(false);
  const { clear_cart } = useContext(Context);

  const what = is ? 'Ordering...' : 'Place order';

  function ordering() {
    set_is(true);
    setTimeout(() => {
      console.log('Order placed!');
      set_is(false);
      clear_cart();
    }, 3000);
  }

  return (
    <div className="order-button">
      <button onClick={ordering}>{what}</button>
    </div>
  );
}

export default Order;

// import React, { useState } from 'react';

// import { useContext } from 'react';
// import { Context } from '../KnupelContext';

// function Order() {
//   const [is, set_is] = useState(false);
//   const { clear_cart } = useContext(Context);

//   const what = is ? 'Ordering...' : 'Place order';

//   function ordering() {
//     set_is(true);
//     setTimeout(() => {
//       console.log('Order placed!');
//       set_is(false);
//       clear_cart();
//     }, 3000);
//   }

//   return (
//     <div className="order-button">
//       <button onClick={ordering}>{what}</button>
//     </div>
//   );
// }

// export default Order;
