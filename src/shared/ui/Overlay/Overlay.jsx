import clsx from 'clsx';
import { memo } from 'react';
import { CSSTransition } from 'react-transition-group';

import cls from './Overlay.module.scss';

export const TRANSITION_DURATION = 300;

export const Overlay = memo((props) => {
  const { className = '', isOpen, onClick } = props;

  return (
    <CSSTransition
      in={isOpen}
      timeout={TRANSITION_DURATION}
      classNames={{ enter: cls.enter, enterActive: cls.enterActive, exit: cls.exit, exitActive: cls.exitActive }}
      mountOnEnter
      unmountOnExit
    >
      <div onClick={onClick} className={clsx(cls.overlay, className)} />
    </CSSTransition>
  );
});
