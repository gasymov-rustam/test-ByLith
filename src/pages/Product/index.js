import { Suspense } from 'react';

import { LoaderProductCard } from '../../components';

import { ProductAsync } from './ProductAsync';

export const Product = () => (
  <Suspense fallback={<LoaderProductCard />}>
    <ProductAsync />
  </Suspense>
);
