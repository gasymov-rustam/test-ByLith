import { memo } from 'react';

import { FlexAlign, FlexJustify, HorizontalFlex, Text } from '../../shared';

import cls from './Logo.module.scss';

export const Logo = memo(() => {
  return (
    <div className={cls.container}>
      <HorizontalFlex justify={FlexJustify.CENTER} align={FlexAlign.CENTER} className={cls.logo}>
        <div className={cls.square} />
        <Text value="PRODUCTS" className={cls.text} />
      </HorizontalFlex>
    </div>
  );
});
