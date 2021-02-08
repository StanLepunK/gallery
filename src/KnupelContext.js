import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Context = React.createContext();

ContextProvider.propTypes = {
  children: PropTypes.string,
};

function ContextProvider({ children }) {
  const [medias, set_medias] = useState([]);
  const address =
    'https://raw.githubusercontent.com/StanLepunK/gallery/master/data/data.json';
  useEffect(() => {
    fetch(address)
      .then((res) => res.json())
      .then((data) => set_medias(data));
  }, []);

  // console.log('ContextProvider() medias', medias);
  return <Context.Provider value={{ medias }}>{children}</Context.Provider>;
}

// function ContextProvider(props) {
//   return <Context.Provider value="">{props.children}</Context.Provider>;
// }

export { ContextProvider, Context };
