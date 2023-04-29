import { AllCards, Layout, Pagination } from '../../components';

export const Home = () => {
  return (
    <Layout withLogo>
      <AllCards />
      <Pagination />
    </Layout>
  );
};
