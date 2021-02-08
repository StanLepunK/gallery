import React, { useContext } from 'react';

import Header from '../components/Header';
import Cart from './Cart';
import Artworks from './Artworks';

import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';

import { ContextProvider, Context } from '../components/KnupelContext';

function HomeGallery() {
  return <h1>Home Page</h1>;
}

function Gallery() {
  const context = useContext(Context);
  return (
    <div>
      <ContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomeGallery />
            </Route>
            <Route path="/artworks">
              <Artworks />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default Gallery;
