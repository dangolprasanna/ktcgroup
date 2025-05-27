import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      window.scrollTo(0, 0);
      prevPath.current = pathname;
    }
    // Only scroll on actual path change
  }, [pathname]);

  return null;
};

export default ScrollToTop;