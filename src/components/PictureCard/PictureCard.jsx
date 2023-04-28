import clsx from 'clsx';

import { Card, HorizontalFlex, Img, Text, TextSize, VerticalFlex } from '../../shared';

import cls from './Picture.module.scss';

export const PictureCard = (props) => {
  const { className, src, price, relevantPrice, name, isSpecialOffer } = props;

  const createPrice = (price, isSpecialOffer, relevantPrice) => {
    if (isSpecialOffer) {
      return (
        <HorizontalFlex className={cls.price}>
          <Text value={`$${price}`} />
          <Text value={`$${relevantPrice}`} />
        </HorizontalFlex>
      );
    }

    return <Text value={`$${price}`} className={cls.price} />;
  };

  return (
    <Card className={clsx(className, cls.card)}>
      <Img src={src} isSpecialOffer={isSpecialOffer} className={cls.img} />

      <VerticalFlex className={cls.labels}>
        <Text value={name} textSize={TextSize.PRIMARY_BOLD} className={cls.name} />
        {createPrice(price, isSpecialOffer, relevantPrice)}
      </VerticalFlex>
    </Card>
  );
};
