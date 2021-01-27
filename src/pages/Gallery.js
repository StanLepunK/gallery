import React from 'react';

import Header from '../components/Header';
import Cart from './Cart';
import Artworks from './Artworks';

import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
function HomeGallery() {
  return <h1>Home Page</h1>;
}

function Gallery() {
  return (
    <div>
      <Header />

      <Router>
        <Link to="/">gallery</Link>
        <Link to="/artworks">artworks</Link>
        <Link to="/cart">cart</Link>

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

        {/* <Header />
      <h1>Gallery Home Page </h1> */}
      </Router>
    </div>
  );
}

export default Gallery;
