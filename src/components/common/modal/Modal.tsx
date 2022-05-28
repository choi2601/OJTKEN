import React, { Fragment, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import * as Style from './ModalStyle';
interface ModalProps {
  isShowing: boolean;
  hide: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

function Modal({ isShowing, hide, children }: PropsWithChildren<ModalProps>) {
  if (isShowing) {
    document.getElementById('body').style.overflow = 'hidden';
    return ReactDOM.createPortal(
      <Fragment>
        <Style.BodyBlackoutStyle onClick={hide} />
        <Style.ModalTemplate isShowing={isShowing}>
          <Style.Inner>
            <Style.DeleteButton onClick={hide}>
              <Style.DeleteCustomIcon />
            </Style.DeleteButton>
            {children}
          </Style.Inner>
        </Style.ModalTemplate>
      </Fragment>,
      document.getElementById('portal-section'),
    );
  }

  document.getElementById('body').style.overflow = 'scroll';
  return null;
}

export default Modal;
