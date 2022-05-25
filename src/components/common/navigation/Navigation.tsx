import { useCallback, useState } from 'react';
import Style from './NavigationStyle';

import LabelToLink from '@components/common/labelToLink';

import { navigationList } from '@const/navigationData';

function Navigation() {
  const [active, setActive] = useState('home');

  const handleLabelToLinkButton = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const currentSelectedKeyword = e.currentTarget.dataset.keyword;

      setActive(currentSelectedKeyword);
    },
    [active],
  );

  const checkActive = (keyword) => {
    if (keyword === active) return true;

    return false;
  };

  return (
    <Style.NavigationWrapper>
      <Style.TabMenu>
        {navigationList.map((item) => (
          <LabelToLink
            key={item}
            keyword={item}
            isActive={checkActive(item)}
            handleLabelToLinkButton={handleLabelToLinkButton}
          />
        ))}
      </Style.TabMenu>
    </Style.NavigationWrapper>
  );
}

export default Navigation;
