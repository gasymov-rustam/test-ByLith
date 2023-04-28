import clsx from 'clsx';

import { FlexAlign, FlexGap, FlexJustify, HorizontalFlex, Skeleton, VerticalFlex } from '../../shared';
import { useMobile } from '../../shared/hooks';

import cls from './Loader.module.scss';

export const LoaderProductCard = () => {
  const isMobile = useMobile();

  const Loader = (
    <>
      <VerticalFlex className={cls.imgContainer}>
        <Skeleton className={cls.images} />

        <HorizontalFlex gap={FlexGap.L}>
          <Skeleton className={cls.img} />
          <Skeleton className={cls.img} />
          <Skeleton className={cls.img} />
          <Skeleton className={cls.img} />
          <Skeleton className={cls.img} />
          <Skeleton className={cls.img} />
        </HorizontalFlex>
      </VerticalFlex>

      <VerticalFlex className={cls.descContainer}>
        <Skeleton className={cls.title} />
        <Skeleton className={cls.price} />
        <Skeleton className={cls.description} />
      </VerticalFlex>

      <VerticalFlex className={cls.selectContainer} gap={FlexGap.XL}>
        <Skeleton className={cls.select} />
        <Skeleton className={cls.select} />
        <HorizontalFlex justify={FlexJustify.BETWEEN} align={FlexAlign.START}>
          <Skeleton className={cls.title} />
          <Skeleton className={cls.counter} />
        </HorizontalFlex>
        <Skeleton className={cls.select} />
      </VerticalFlex>
    </>
  );

  if (isMobile) {
    return (
      <VerticalFlex className={cls.oneProductWrapper} justify={FlexJustify.CENTER} align={FlexAlign.CENTER}>
        {Loader}
      </VerticalFlex>
    );
  }

  return (
    <HorizontalFlex className={clsx(cls.oneProductWrapper)} justify={FlexJustify.START} align={FlexAlign.START}>
      {Loader}
    </HorizontalFlex>
  );
};
