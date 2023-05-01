import { useEffect } from 'react';

import { useGlobalContext } from '../../app';
import { DashBoard, Layout, Pagination } from '../../components';
import { REQUESTS, useFetch } from '../../shared';

export const Home = () => {
  const { methods } = useGlobalContext();
  const { data, error, isLoading } = useFetch({ url: REQUESTS.GET_ALL });

  useEffect(() => {
    methods.setLoading(isLoading);
    methods.setData(data);
    methods.setError(error);
    window.localStorage.setItem('data', JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isLoading]);

  return (
    <Layout withLogo>
      <DashBoard />
      <Pagination />
    </Layout>
  );
};
