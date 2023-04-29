import { useEffect } from 'react';

import { useGlobalContext } from '../../app';
import { AllCards, Layout, Pagination } from '../../components';
import { useFetch } from '../../shared';

export const Home = () => {
  const { methods } = useGlobalContext();
  const { data, error, isLoading } = useFetch({ url: 'https://fedtest.bylith.com/api/Catalog/GetAll' });

  useEffect(() => {
    methods.setLoading(isLoading);
    methods.setData(data);
    methods.setError(error);
    window.localStorage.setItem('data', JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isLoading]);

  return (
    <Layout withLogo>
      <AllCards />
      <Pagination />
    </Layout>
  );
};
