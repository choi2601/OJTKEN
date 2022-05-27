import React, { Fragment, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ModalTemplate from './ModalTemplate';

interface ModalProps {
  isShowing: boolean;
  hide: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Modal({ isShowing, hide, children }: PropsWithChildren<ModalProps>) {
  if (isShowing) {
    document.getElementById('body').style.overflow = 'hidden';
    return ReactDOM.createPortal(
      <Fragment>
        <BodyBlackoutStyle onClick={hide} />
        <ModalTemplate>{children}</ModalTemplate>
      </Fragment>,
      document.body,
    );
  } else {
    document.getElementById('body').style.overflow = 'scroll';
    return null;
  }
}

const BodyBlackoutStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  z-index: 9998;
`;

export default Modal;
