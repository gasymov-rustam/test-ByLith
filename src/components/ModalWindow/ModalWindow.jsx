import { memo } from 'react';

import { Img, Modal } from '../../shared';

import cls from './ModalWindow.module.scss';

export const ModalWindow = memo(({ open, src, isSpecialOffer, handleOpenModal }) => {
  // if (!open) return null;

  return (
    <Modal isOpen={open} onClose={handleOpenModal} className={cls.modal}>
      <Img src={src} className={cls.mainImg} parentClassName={cls.parentMainImage} isSpecialOffer={isSpecialOffer} />
    </Modal>
  );
});
