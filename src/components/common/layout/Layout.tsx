import { PropsWithChildren } from 'react';
import * as Style from './Layout.style';

import Navigation from '@components/common/navigation';

const Layout = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <Style.LayoutWrapper>
      <Navigation />
      {children}
      <Style.Footer />
    </Style.LayoutWrapper>
  );
};

export default Layout;
