import Style from './LabelToLinkStyle';
import Link from 'next/link';
interface LabelToLinkProps {
  keyword: string;
  isActive: boolean;
  handleLabelToLinkButton: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function LabelToLink({ keyword, isActive, handleLabelToLinkButton }: LabelToLinkProps) {
  return (
    <Style.LabelToLinkWrapper isActive={isActive}>
      <Link href={`/${keyword}`}>
        <Style.CustomLink data-keyword={keyword} onClick={handleLabelToLinkButton}>
          {keyword}
        </Style.CustomLink>
      </Link>
    </Style.LabelToLinkWrapper>
  );
}

export default LabelToLink;
