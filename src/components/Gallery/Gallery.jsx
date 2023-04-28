import { memo } from 'react';

import { FlexGap, HorizontalFlex, Img, VerticalFlex } from '../../shared';

import cls from './Gallery.module.scss';

export const Gallery = memo(({ images, onChange }) => {
  const handleClick = (value, index) => () => {
    onChange(value, index);
  };

  return (
    <VerticalFlex className={cls.wrapper} gap={FlexGap.M}>
      <Img src={images[0].url} className={cls.mainImg} parentClassName={cls.parentMainImage} />

      <HorizontalFlex gap={FlexGap.M} className={cls.block}>
        {images?.reduce((accum, image, index) => {
          if (!index) return accum;
          accum.push(
            <Img key={image.name} src={image.url} className={cls.otherPicture} onClick={handleClick(image, index)} />,
          );

          return accum;
        }, [])}
      </HorizontalFlex>
    </VerticalFlex>
  );
});
