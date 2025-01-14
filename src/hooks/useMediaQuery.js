'use client';
import { useEffect, useState } from 'react';

export const useMediaQuery = (mediaQuery) => {
  const [isQueryActive, setIsQueryActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const queryList = window.matchMedia(mediaQuery);
      setIsQueryActive(queryList.matches);

      const updateQueryStatus = () => setIsQueryActive(queryList.matches);
      queryList.addEventListener('change', updateQueryStatus);

      return () => queryList.removeEventListener('change', updateQueryStatus);
    }
  }, [mediaQuery]);

  return isQueryActive;
};
