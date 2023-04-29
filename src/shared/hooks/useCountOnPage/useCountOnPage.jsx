import { useLayoutEffect, useRef } from 'react';

import { useMobile } from '../useMobile/useMobile';

export const useCountOnPage = () => {
  const countRef = useRef(8);
  const isMobile = useMobile();
  const isTablet = useMobile('(max-width: 992px)');

  useLayoutEffect(() => {
    if (isMobile) {
      countRef.current = 4;
    } else if (isTablet) {
      countRef.current = 6;
    } else {
      countRef.current = 8;
    }
  }, [isMobile, isTablet]);

  return countRef.current;
};
