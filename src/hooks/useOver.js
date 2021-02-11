import { useState, useEffect, useRef } from 'react';

function useOver() {
  const [over, set_over] = useState(false);

  const ref = useRef(null);

  function enter() {
    set_over(true);
  }

  function leave() {
    set_over(false);
  }

  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter);
    ref.current.addEventListener('mouseleave', leave);

    return () => {
      if (ref !== null && ref.current !== null) {
        ref.current.removeEventListener('mouseenter', enter);
        ref.current.removeEventListener('mouseleave', leave);
      }
    };
  }, []);

  return [over, ref];
}

export default useOver;
