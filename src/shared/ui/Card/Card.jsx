import clsx from 'clsx';

import { VerticalFlex } from '../Flex';

import cls from './Card.module.scss';

export const Card = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <VerticalFlex className={clsx(cls.card, className)} {...otherProps}>
      {children}
    </VerticalFlex>
  );
};
