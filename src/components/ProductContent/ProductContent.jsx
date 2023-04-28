import { memo, useEffect } from 'react';

import { useGlobalContext } from '../../app';
import { useFetch } from '../../shared/hooks';

export const ProductContent = memo(({ id }) => {
  // const { data, error, isLoading } = useFetch({ url: `https://fedtest.bylith.com/api/catalog/get?id=${id}` });
  const { methods } = useGlobalContext();

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('product'));
    methods.setLoading(false);
    methods.setProduct(data);
    methods.setError(null);
    window.localStorage.setItem('product', JSON.stringify(data));
  }, []);

  return <div>ProductContent</div>;
});
