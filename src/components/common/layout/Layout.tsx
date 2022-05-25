import { PropsWithChildren } from 'react';
import * as Style from './LayoutStyle';

import Navigation from '@components/common/navigation';

function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <Style.LayoutWrapper>
      <Navigation />
      {children}
      <Style.Footer />
    </Style.LayoutWrapper>
  );
}

export default Layout;
