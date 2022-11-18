import { useMediaQuery } from 'react-responsive';

export const useGetDevice = () => {
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });
  const isTabletAndDesktop = useMediaQuery({ minWidth: 768 });
  const currentDevice = isMobile
    ? 'Mobile'
    : isTabletAndDesktop
    ? 'TabletAndDesktop'
    : 'error';

  return { isMobile, isTabletAndDesktop, currentDevice };
};
