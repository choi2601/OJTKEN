import * as Style from './Layout.style';

import Navigation from '@components/common/navigation';
import type { PropsWithChildren } from 'types/props';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Style.LayoutWrapper>
      <Navigation />
      {children}
      <Style.Footer />
    </Style.LayoutWrapper>
  );
};

export default Layout;
