import clsx from 'clsx';
import { memo } from 'react';

import SpecialOffer from '../../assets/images/Offer.webp';
import { createLink } from '../../utils';

import cls from './Img.module.scss';

export const Variant = {
  DESKTOP_DASHBOARD: 'desktopDashboard',
  DESKTOP_LITTLE: 'desktopLittle',
  DESKTOP_BIG: 'desktopBig',
  MOBILE_DESKTOP: 'mobileDesktop',
  MOBILE_LITTLE: 'mobileLittle',
  MOBILE_BIG: 'mobileBig',
};

export const Img = memo((props) => {
  const {
    src,
    alt = 'Error',
    width = 1,
    height = 1,
    decoding = 'async',
    loading = 'lazy',
    size = Variant.DESKTOP_DASHBOARD,
    isSpecialOffer = false,
    className,
    parentClassName,
    isUsualImg = false,
    ...otherProps
  } = props;

  const mod = { [cls.opacity]: isSpecialOffer };

  return (
    <div className={clsx(cls.img, parentClassName)}>
      {isSpecialOffer && (
        <img
          src={SpecialOffer}
          alt={alt}
          width={width}
          height={height}
          decoding={decoding}
          loading={loading}
          className={cls.special}
        />
      )}
      <img
        src={isUsualImg ? src : createLink(src)}
        alt={alt}
        width={width}
        height={height}
        decoding={decoding}
        loading={loading}
        className={clsx(className, mod, cls[size])}
        {...otherProps}
      />
    </div>
  );
});
