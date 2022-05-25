import * as Style from './LabelToLink.style';
import Link from 'next/link';

import type { LabelToLinkProps } from './LabelToLink.type';

const LabelToLink = ({ keyword, isActive, handleLabelToLinkButton }: LabelToLinkProps): JSX.Element => {
  return (
    <Style.LabelToLinkWrapper isActive={isActive}>
      <Link href={`/${keyword}`}>
        <Style.CustomLink data-keyword={keyword} onClick={handleLabelToLinkButton}>
          {keyword}
        </Style.CustomLink>
      </Link>
    </Style.LabelToLinkWrapper>
  );
};

export default LabelToLink;
