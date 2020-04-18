import { useState, useEffect } from 'react';

export const useSize = ref => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);
  }, [ref]);

  return {
    height,
    width
  }
};
