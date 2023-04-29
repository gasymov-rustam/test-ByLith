import clsx from 'clsx';

import { HorizontalFlex } from '../Flex';
import { Text } from '../Text';

import cls from './Price.module.scss';

export const Price = ({ price, as, isSpecialOffer = false, relevantPrice = 0, className }) => {
  if (isSpecialOffer) {
    return (
      <HorizontalFlex className={clsx(cls.price, className)} as={as}>
        <Text value={`$${price}`} />
        <Text value={`$${relevantPrice}`} />
      </HorizontalFlex>
    );
  }

  return (
    <HorizontalFlex className={clsx(className)} as={as}>
      <Text value={`$${price}`} className={cls.price} />
    </HorizontalFlex>
  );
};
