import styled from 'styled-components';

import type { LabelToLinkWrapperProps } from './LabelToLink.type';

const LabelToLinkWrapper = styled.li<LabelToLinkWrapperProps>`
  padding: 25px;
  border: none;
  font-family: 'Roboto-Regular';
  font-size: 17px;
  color: ${({ theme }) => theme.color.white};
  transition: ease background-color 200ms;
  background-color: ${({ theme, isActive }) => (isActive ? theme.color.blue[700] : 'inherit')};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue[500]};
  }
`;

const CustomLink = styled.a`
  display: block;
  text-decoration: none;
  outline: none;
`;

export { LabelToLinkWrapper, CustomLink };
