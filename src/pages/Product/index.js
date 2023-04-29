import { Suspense } from 'react';

import { Layout, LoaderProductCard } from '../../components';

import { ProductAsync } from './ProductAsync';

export const Product = () => (
  <Suspense
    fallback={
      <Layout>
        <LoaderProductCard />
      </Layout>
    }
  >
    <ProductAsync />
  </Suspense>
);
