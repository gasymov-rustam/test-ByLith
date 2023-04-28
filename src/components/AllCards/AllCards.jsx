import { memo } from 'react';

import { useGlobalContext } from '../../app';
import { FlexGap, FlexJustify, HorizontalFlex } from '../../shared';
import { Error } from '../Error';
import { Loader } from '../Loaders';
import { PictureCard } from '../PictureCard';

export const AllCards = memo(() => {
  const { state } = useGlobalContext();
  const { data, error, isLoading } = state;
  const products = data?.data ?? [];

  if (isLoading) {
    return <Loader count={8} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <HorizontalFlex justify={FlexJustify.BETWEEN} gap={FlexGap.XXL}>
      {products?.map((product) => {
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
