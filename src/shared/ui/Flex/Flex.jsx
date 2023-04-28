import clsx from 'clsx';

import cls from './Flex.module.scss';

export const FlexJustify = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
  BETWEEN: 'between',
};

export const FlexWrap = {
  WRAP: 'wrap',
  NO_WRAP: 'noWrap',
};

export const FlexAlign = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
};

export const FlexDirection = {
  ROW: 'row',
  COLUMN: 'column',
};

export const FlexGap = {
  XS: 'gapXS',
  S: 'gapS',
  M: 'gapM',
  L: 'gapL',
  XL: 'gapXL',
  XXL: 'gapXXL',
};

const justifyClasses = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

export const Flex = (props) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max = true,
    wrap = FlexWrap.WRAP,
    as = 'div',
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    cls[wrap],
    gap && cls[gap],
  ];

  const mods = {
    [cls.max]: max,
  };

  const Tag = as;

  return (
    <Tag className={clsx(cls.Flex, mods, classes)} {...otherProps}>
      {children}
    </Tag>
  );
};
