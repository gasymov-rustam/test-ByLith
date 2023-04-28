import clsx from 'clsx';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Paths } from '../../app';
import { FlexAlign, FlexJustify, HorizontalFlex, Img, VerticalFlex } from '../../shared';
import spectrum from '../../shared/assets/images/Spectrum.png';

import cls from './Header.module.scss';

export const Header = memo(() => {
  const { pathname } = useLocation();

  const mod = {
    [cls.active]: pathname === Paths.HOME,
  };

  return (
    <VerticalFlex as="header" className={cls.header} align={FlexAlign.CENTER}>
      <HorizontalFlex justify={FlexJustify.CENTER} align={FlexAlign.CENTER}>
        <Img src={spectrum} isUsualImg className={cls.img} />
      </HorizontalFlex>

      <HorizontalFlex justify={FlexJustify.CENTER} align={FlexAlign.CENTER}>
        <hr className={cls.divider} style={{ width: '100%' }} />
      </HorizontalFlex>

      <HorizontalFlex justify={FlexJustify.CENTER} align={FlexAlign.CENTER}>
        <Link to={Paths.HOME} className={clsx(cls.homeLink, mod)}>
          HOME
        </Link>
      </HorizontalFlex>
    </VerticalFlex>
  );
});
