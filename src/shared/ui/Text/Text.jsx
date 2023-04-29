import clsx from 'clsx';
import { memo } from 'react';

import cls from './Text.module.scss';

export const TextSize = {
  LIGHT: 'light',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  PRIMARY_BOLD: 'primaryBold',
  SECONDARY_BOLD: 'secondaryBold',
  HEADER: 'header',
  HOME_TITLE: 'homeTitle',
};

export const Text = memo((props) => {
  const { className, value, textSize = TextSize.REGULAR, as = 'span', ...otherProps } = props;

  const Tag = as;

  return (
    <Tag className={clsx(className, cls[textSize])} {...otherProps}>
      {value}
    </Tag>
  );
});
