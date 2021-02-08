import React, { useContext } from 'react';

import Image from '../components/Image';
import { Context } from '../KnupelContext';
import { get_size_image } from '../utils/utils_0';

function Artworks() {
  const { medias } = useContext(Context);
  console.log('Artworks() medias', medias);

  const { toggle_like } = useContext(Context);

  const res = medias.map((elem, i) => (
    // toggle_like(i);
    <Image key={elem.id} elem={elem} className={get_size_image(i)} />
  ));
  return (
    <main className="artworks">
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
