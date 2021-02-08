import React, { useContext } from 'react';

import Image from '../components/Image';
import { Context } from '../KnupelContext';
import { getClass } from '../utils';

function Artworks() {
  const { medias } = useContext(Context);
  // console.log('Artworks() medias', medias);

  const res = medias.map((elem, i) => (
    <Image key={elem.id} elem={elem} className={getClass(i)} />
  ));
  return (
    <main className="artworks">
      {/* <h1>Artworks go here</h1> */}
      <div>{res}</div>
    </main>
  );
}

export default Artworks;

/*
const list = line.map((elem) => (
    <Cell key={elem.id} id={elem.id} show={elem.is} />
  ));
  */
