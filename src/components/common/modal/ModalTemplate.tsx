import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

function ModalTemplate({ children }: PropsWithChildren<unknown>) {
  return (
    <ModalTemplateWrapper>
      <Inner>{children}</Inner>
    </ModalTemplateWrapper>
  );
}

const ModalTemplateWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      padding: 2rem;
      border: 1px ${color.gray[500]} solid;
      border-radius: 2px;
      z-index: 9999;
      background-color: ${color.white};
    `;
  }}
`;

export default ModalTemplate;
