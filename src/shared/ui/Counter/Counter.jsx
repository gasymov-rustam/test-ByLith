import clsx from 'clsx';
import { memo } from 'react';

import { FlexAlign, FlexGap, FlexJustify, HorizontalFlex } from '../Flex';
import { Text, TextSize } from '../Text';

import cls from './Counter.module.scss';

export const Counter = memo((props) => {
  const { value, className, onChange } = props;
  const isDisabled = value === 1;

  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  return (
    <HorizontalFlex gap={FlexGap.XS} className={className} max={false}>
      <button
        type="button"
        className={clsx(cls.btn, { [cls.disabled]: isDisabled })}
        disabled={isDisabled}
        onClick={handleDecrement}
      >
        <Text textSize={TextSize.PRIMARY_BOLD} value="-" />
      </button>
      <HorizontalFlex as="span" className={cls.counter} justify={FlexJustify.CENTER} align={FlexAlign.CENTER}>
        {value}
      </HorizontalFlex>
      <button type="button" className={cls.btn} onClick={handleIncrement}>
        <Text textSize={TextSize.LIGHT} value="+" />
      </button>
    </HorizontalFlex>
  );
});
