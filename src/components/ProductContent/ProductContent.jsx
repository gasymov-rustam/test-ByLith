import { memo, useEffect, useState } from 'react';

import { useGlobalContext } from '../../app';
import {
  Button,
  FlexAlign,
  FlexGap,
  HorizontalFlex,
  Price,
  REQUESTS,
  Text,
  TextSize,
  VerticalFlex,
} from '../../shared';
import { useFetch } from '../../shared/hooks';
import { Attributes } from '../Attributes';
import { Error } from '../Error';
import { Gallery } from '../Gallery';
import { LoaderProductCard } from '../Loaders';
import { Quantity } from '../Quantity';

import cls from './ProductContent.module.scss';

export const ProductContent = memo(({ id }) => {
  const { data, isLoading, error, fetchUpdateData } = useFetch({
    url: `${REQUESTS.GET_BY_ID}${id}`,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const { methods, state } = useGlobalContext();
  const product = state?.product?.data;
  const count = state?.productCount;
  const currentTitle = state?.variant?.title;
  const variantId = state?.variant?.id;
  const images = product?.images;
  const title = currentTitle ?? product?.title;
  const description = product?.description;
  const price = state.variant?.price;
  const isSpecialOffer = !!(product?.max_price - product?.min_price);

  useEffect(() => {
    // const data = JSON.parse(window.localStorage.getItem('product'));
    methods.setLoading(isLoading);
    methods.setProduct(data);
    methods.setError(error);
    window.localStorage.setItem('product', JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSubmit = async () => {
    const productAddToCart = {
      variant_id: +variantId,
      quantity: count,
    };

    const response = await fetchUpdateData({
      url: REQUESTS.ADD_TO_CART,
      body: productAddToCart,
      messageSuccess: 'Product added to cart successfully!',
    });

    if (!response.error) {
      methods.addToCart(productAddToCart);
      methods.setResetLabels();
    }
  };

  useEffect(() => {
    setIsDisabled(!variantId);
  }, [variantId]);

  if (isLoading) {
    return <LoaderProductCard />;
  }

  if (error && !product) {
    return <Error />;
  }

  return (
    <HorizontalFlex max={false} className={cls.wrapper} align={FlexAlign.START} gap={FlexGap.XL}>
      <Gallery images={images} className={cls.gallery} />

      <div className={cls.miniDesktop}>
        <VerticalFlex max={false} className={cls.description}>
          <Text value={title} as="h2" className={cls.title} />

          <Price
            price={product?.max_price}
            as="h3"
            isSpecialOffer={isSpecialOffer}
            relevantPrice={price ?? product?.min_price}
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
      </div>
    </HorizontalFlex>
  );
});
