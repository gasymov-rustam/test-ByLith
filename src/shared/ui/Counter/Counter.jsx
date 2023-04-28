import { memo } from 'react';

import { FlexAlign, FlexGap, FlexJustify, HorizontalFlex } from '../Flex';

import cls from './Counter.module.scss';

export const Counter = memo((props) => {
  const { value, className, onChange } = props;

  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  return (
    <HorizontalFlex gap={FlexGap.XS} className={className} max={false}>
      <button type="button" className={cls.btn} onClick={handleDecrement}>
        -
      </button>
      <HorizontalFlex as="span" className={cls.counter} justify={FlexJustify.CENTER} align={FlexAlign.CENTER}>
        {value}
      </HorizontalFlex>
      <button type="button" className={cls.btn} onClick={handleIncrement}>
        +
      </button>
    </HorizontalFlex>
  );
});
