import { useGetDevice } from 'hooks';

export const AppContent = () => {
  const { isMobile, isTabletAndDesktop } = useGetDevice();

  if (isMobile) {
    return <h1>Mobile</h1>;
  }

  if (isTabletAndDesktop) {
    return <h1>isTabletAndDesktop</h1>;
  }

  return <>Not find pages</>;
};
