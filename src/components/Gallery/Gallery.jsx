import clsx from 'clsx';
import { memo } from 'react';

import { useGlobalContext } from '../../app';
import { FlexGap, HorizontalFlex, Img, VerticalFlex } from '../../shared';

import cls from './Gallery.module.scss';

export const Gallery = memo(({ images, className }) => {
  const { methods, state } = useGlobalContext();
  const product = state?.product?.data;
  const currentImage = state?.variantImage;
  const isSpecialOffer = currentImage ? false : !!(product?.max_price - product?.min_price);

  const handleClick = (value, index) => () => {
    methods.setImages(value, index);
    methods.resetLabels();
  };

  if (!images?.length) return null;

  return (
    <VerticalFlex className={clsx(cls.wrapper, className)} gap={FlexGap.M}>
      <Img
        src={images[0].url}
        className={cls.mainImg}
        parentClassName={cls.parentMainImage}
        isSpecialOffer={isSpecialOffer}
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
