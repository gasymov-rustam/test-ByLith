import { DashBoard, Layout, Pagination } from '../../components';

export const Home = () => {
  return (
    <Layout withLogo>
      <DashBoard />
      <Pagination />
    </Layout>
  );
};
