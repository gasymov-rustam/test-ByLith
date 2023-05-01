import clsx from 'clsx';
import { memo, useState } from 'react';

import { useGlobalContext } from '../../app';
import { FlexGap, HorizontalFlex, Img, VerticalFlex, useMobile } from '../../shared';
import { ModalWindow } from '../ModalWindow';

import cls from './Gallery.module.scss';

export const Gallery = memo(({ images, className }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMobile();
  const { methods, state } = useGlobalContext();
  const product = state?.product?.data;
  const attributes = state?.product?.data?.attributes;
  const isSpecialOffer = !!(product?.max_price - product?.min_price);

  const handleClick = (value, index) => () => {
    methods.setImages(value, index);

    attributes.forEach((item) => {
      const color = item.labels.find((label) => {
        return label.title.toLowerCase() === value.title.split('.')[0];
      });

      if (color) {
        methods.setResetLabels();
        methods.setLabels({ attribute_id: item.id, label_id: color?.id });
      }
    });
  };

  const handleOpenModal = () => {
    setOpen((prev) => !prev);
  };

  if (!images?.length) return null;

  return (
    <VerticalFlex className={clsx(cls.wrapper, className)} gap={FlexGap.M}>
      {!isMobile && (
        <ModalWindow
          open={open}
          src={images?.[0].url}
          isSpecialOffer={isSpecialOffer}
          handleOpenModal={handleOpenModal}
        />
      )}

      <Img
        src={images?.[0].url}
        className={cls.mainImg}
        width={400}
        height={400}
        parentClassName={cls.parentMainImage}
        isSpecialOffer={isSpecialOffer}
        onClick={handleOpenModal}
      />

      <HorizontalFlex gap={FlexGap.M} className={cls.block}>
        {images?.reduce((accum, image, index) => {
          if (!index) return accum;

          accum.push(
            <Img key={image.title} src={image.url} className={cls.otherPicture} onClick={handleClick(image, index)} />,
          );

          return accum;
        }, [])}
      </HorizontalFlex>
    </VerticalFlex>
  );
});
