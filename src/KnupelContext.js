import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Context = React.createContext();

ContextProvider.propTypes = {
  children: PropTypes.string,
};

function ContextProvider({ children }) {
  const [medias, set_medias] = useState([]);
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
        console.log(id, !elem.isFavorite);
        return { ...elem, isFavorite: !elem.isFavorite };
      }
      return elem;
    });
    set_medias(update_all);
  }

  // console.log('ContextProvider() medias', medias);
  return (
    <Context.Provider value={{ medias, toggle_like }}>
      {children}
    </Context.Provider>
  );
}

// function ContextProvider(props) {
//   return <Context.Provider value="">{props.children}</Context.Provider>;
// }

export { ContextProvider, Context };
