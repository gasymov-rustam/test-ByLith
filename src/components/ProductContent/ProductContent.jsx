import { memo, useEffect, useState } from 'react';

import { useGlobalContext } from '../../app';
import { Button, FlexGap, FlexJustify, HorizontalFlex, Price, Text, TextSize, VerticalFlex } from '../../shared';
import { useFetch } from '../../shared/hooks';
import { Attributes } from '../Attributes';
import { Gallery } from '../Gallery';
import { Quantity } from '../Quantity';

import cls from './ProductContent.module.scss';

export const ProductContent = memo(({ id }) => {
  const { data, error, isLoading } = useFetch({ url: `https://fedtest.bylith.com/api/catalog/get?id=${id}` });
  const [isDisabled, setIsDisabled] = useState(true);
  const { methods, state } = useGlobalContext();
  const product = state?.product?.data;
  const labels = state?.labels;
  const count = state?.productCount;
  const currentTitle = state?.variantTitle;
  const variantId = state?.variantId;
  const images = product?.images;
  const title = currentTitle ?? product?.title;
  const description = product?.description;
  const attributes = product?.attributes;
  const price = state.variantPrice;
  const isSpecialOffer = price ? false : !!(product?.max_price - product?.min_price);

  useEffect(() => {
    // const data = JSON.parse(window.localStorage.getItem('product'));
    methods.setLoading(isLoading);
    methods.setProduct(data);
    methods.setError(error);
    window.localStorage.setItem('product', JSON.stringify(data));
  }, [data, error, isLoading, methods]);

  const handleSubmit = () => {
    const productAddToCart = {
      id: variantId ?? product?.id,
      quantity: count,
    };

    console.log('🚀 => 👍 ==>> ProductContent ==>> Line #42 ==>> ', productAddToCart);
  };

  useEffect(() => {
    const isDisabled = attributes?.length !== labels?.length;

    setIsDisabled(isDisabled);
  }, [labels, attributes]);

  return (
    <HorizontalFlex max={false} className={cls.wrapper} gap={FlexGap.XL}>
      <Gallery images={images} className={cls.gallery} />

      <VerticalFlex max={false} className={cls.description}>
        <Text value={title} as="h2" className={cls.title} />

        <Price
          price={price ?? product?.max_price}
          as="h3"
          isSpecialOffer={isSpecialOffer}
          relevantPrice={product?.min_price}
          className={cls.price}
        />
        <Text value={description} as="p" className={cls.text} />
      </VerticalFlex>

      <VerticalFlex max={false} className={cls.selects}>
        <Attributes className={cls.attributes} />
        <Quantity />

        <Button onClick={handleSubmit} disabled={isDisabled}>
          <Text textSize={TextSize.PRIMARY_BOLD} value="Add to cart" />
        </Button>
      </VerticalFlex>
    </HorizontalFlex>
  );
});
