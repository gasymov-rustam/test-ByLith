import clsx from 'clsx';
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Overlay, TRANSITION_DURATION } from '../Overlay';
import { Portal } from '../Portal';

import cls from './Modal.module.scss';

export const Modal = (props) => {
  const { children, className, isOpen, onClose } = props;

  useEffect(() => {
    document.querySelector('body').style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <Portal>
      <Overlay isOpen={isOpen} onClick={onClose} />

      <CSSTransition
        in={isOpen}
        timeout={TRANSITION_DURATION}
        classNames={{
          enter: cls.enterContent,
          enterActive: cls.enterActiveContent,
          exit: cls.exitContent,
          exitActive: cls.exitActiveContent,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={clsx(cls.content, className)}>
          <div className={cls.child}>{children}</div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
