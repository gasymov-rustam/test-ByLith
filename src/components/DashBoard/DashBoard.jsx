import { memo, useMemo } from 'react';

import { useGlobalContext } from '../../app';
import { FlexGap, HorizontalFlex, useCountOnPage } from '../../shared';
import { Error } from '../Error';
import { Loader } from '../Loaders';
import { PictureCard } from '../PictureCard';

import cls from './DashBoard.module.scss';

export const DashBoard = memo(() => {
  const count = useCountOnPage();
  const { state } = useGlobalContext();
  const { data, error, isLoading, currentPage } = state;

  const productsSlices = useMemo(() => {
    const start = count * (currentPage - 1);
    const end = start + count;

    return data?.data?.slice(start, end) ?? [];
  }, [count, currentPage, data?.data]);

  if (isLoading) {
    return <Loader count={count} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <HorizontalFlex gap={FlexGap.XXL} className={cls.wrapper}>
      {productsSlices?.map((product) => {
        const specialOffer = !!(product?.max_price - product?.min_price);

        return (
          <PictureCard
            key={product?.id}
            id={product?.id}
            src={product?.images[0].url}
            price={product?.max_price}
            relevantPrice={product?.min_price}
            isSpecialOffer={specialOffer}
            name={product?.english_title}
          />
        );
      })}
    </HorizontalFlex>
  );
});
