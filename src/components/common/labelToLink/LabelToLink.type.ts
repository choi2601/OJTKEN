interface LabelToLinkProps {
  keyword: string;
  isActive: boolean;
  handleLabelToLinkButton: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface LabelToLinkWrapperProps {
  isActive: boolean;
}

export type { LabelToLinkProps, LabelToLinkWrapperProps };
