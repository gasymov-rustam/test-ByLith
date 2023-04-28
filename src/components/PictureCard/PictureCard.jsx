import clsx from 'clsx';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../../app';
import { Card, HorizontalFlex, Img, Text, TextSize, VerticalFlex } from '../../shared';

import cls from './Picture.module.scss';

export const PictureCard = memo((props) => {
  const { className, src, price, relevantPrice, name, isSpecialOffer, id } = props;
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`${Paths.PRODUCT}${id}`);
  };

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
    <Card className={clsx(className, cls.card)} onClick={navigateToProduct}>
      <Img src={src} isSpecialOffer={isSpecialOffer} className={cls.img} />

      <VerticalFlex className={cls.labels}>
        <Text value={name} textSize={TextSize.PRIMARY_BOLD} className={cls.name} />
        {createPrice(price, isSpecialOffer, relevantPrice)}
      </VerticalFlex>
    </Card>
  );
});
