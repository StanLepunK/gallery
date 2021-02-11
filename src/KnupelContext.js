import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Context = React.createContext();

ContextProvider.propTypes = {
  children: PropTypes.string,
};

function ContextProvider({ children }) {
  const [medias, set_medias] = useState([]);
  const [cart_items, set_cart_item] = useState([]);
  // const address =
  //   'https://raw.githubusercontent.com/StanLepunK/gallery/master/data/data.json';
  const address =
    'https://raw.githubusercontent.com/StanLepunK/gallery/master/data/data_scrimba.json';
  useEffect(() => {
    fetch(address)
      .then((res) => res.json())
      .then((data) => set_medias(data));
  }, []);

  function toggle_like(id) {
    const update_all = medias.map((elem) => {
      if (elem.id === id) {
        return { ...elem, isFavorite: !elem.isFavorite };
      }
      return elem;
    });
    set_medias(update_all);
  }

  function remove_items(id) {
    let is = (elem) => elem.id !== id;
    set_cart_item((prev_list) => prev_list.filter(is));
    // set_cart_item((prev_list) => prev_list.filter((elem) => elem.id !== id));
  }

  // function remove_items(id) {
  //   let sub_is = false;
  //   let index = -1;
  //   for (index = 0; index < cart_items.length; index++) {
  //     if (cart_items[index].id === id) {
  //       sub_is = true;
  //       break;
  //     }
  //   }
  //   if (sub_is) {
  //     cart_items.splice(index, 1);
  //     console.log('remove item', cart_items.length);
  //   }
  //   set_cart_item(cart_items);
  //   return sub_is;
  // }

  function add_items(elem) {
    let add_is = true;
    for (let index = 0; index < cart_items.length; index++) {
      if (cart_items[index].id === elem.id) {
        add_is = false;
        break;
      }
    }
    if (add_is) {
      cart_items.push(elem);
      console.log('add item', cart_items.length);
    }
    set_cart_item(cart_items);
  }

  function clear_cart() {
    set_cart_item([]);
  }

  // style with arrow function I don't like it
  // function add_items(elem) {
  //   console.log('cart length', cart_items.length);
  //   set_cart_item((prev_elem) => [...prev_elem, elem]);
  // }

  // function add_items(id) {
  //   let time = new Date();
  //   console.log('cart length', cart_items.length);
  //   const all = medias.map((elem) => {
  //     if (elem.id === id) {
  //       console.log(id, time.getTime(), !elem.isFavorite);
  //       cart_items.push(elem);
  //     }
  //   });
  //   set_cart_item(cart_items);
  // }

  return (
    <Context.Provider
      value={{
        cart_items,
        medias,
        toggle_like,
        add_items,
        remove_items,
        clear_cart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
