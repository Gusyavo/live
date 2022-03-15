import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: vw, innerHeight: vh } = window;
  return {
    vw,
    vh
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}