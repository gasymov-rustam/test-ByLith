import clsx from 'clsx';
import { memo } from 'react';

import { useGlobalContext } from '../../app';
import { Counter, FlexJustify, HorizontalFlex, Text, TextSize } from '../../shared';

import cls from './Quantity.module.scss';

export const Quantity = memo(({ className }) => {
  const { state, methods } = useGlobalContext();
  const { productCount } = state;

  return (
    <HorizontalFlex className={clsx(cls.quantity, className)} justify={FlexJustify.BETWEEN}>
      <Text textSize={TextSize.LIGHT} value="Quantity" className={cls.text} />
      <Counter value={productCount} onChange={methods.setProductCount} />
    </HorizontalFlex>
  );
});
