import clsx from 'clsx';
import { memo } from 'react';

import { Img, Modal } from '../../shared';

import cls from './ModalWindow.module.scss';

export const ModalWindow = memo(({ open, src, isSpecialOffer, handleOpenModal }) => {
  return (
    <Modal isOpen={open} onClose={handleOpenModal} className={clsx(cls.modal, 'scroll-disabled')}>
      <Img src={src} className={cls.mainImg} parentClassName={cls.parentMainImage} isSpecialOffer={isSpecialOffer} />
    </Modal>
  );
});
