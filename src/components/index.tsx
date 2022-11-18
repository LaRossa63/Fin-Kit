import { useGetDevice } from 'hooks';
import { MobilePage } from './device/Mobile';
import { TabletAndDesktopPage } from './device/TabletAndDesktop';

export const AppContent = () => {
  const { isMobile, isTabletAndDesktop, currentDevice } = useGetDevice();

  if (isMobile) {
    return <MobilePage />;
  }

  if (isTabletAndDesktop) {
    return <TabletAndDesktopPage />;
  }

  return <>Not find page</>;
};
