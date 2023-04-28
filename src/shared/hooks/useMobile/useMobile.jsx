import { useEffect, useState } from 'react';

import { useEventListener } from '../useEventListener/useEventListener';

export const useMobile = (mediaQuery = '(max-width: 640px)') => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener('change', (e) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
};
