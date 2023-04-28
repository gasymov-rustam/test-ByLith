import { memo } from 'react';

import { Counter, FlexJustify, HorizontalFlex, Text, TextSize } from '../../shared';

import cls from './Quantity.module.scss';

export const Quantity = memo((props) => {
  const { value, onChange } = props;

  return (
    <HorizontalFlex className={cls.quantity} justify={FlexJustify.BETWEEN}>
      <Text textSize={TextSize.LIGHT} value="Quantity" />
      <Counter value={value} onChange={onChange} />
    </HorizontalFlex>
  );
});
