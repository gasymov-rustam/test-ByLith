import { useParams } from 'react-router-dom';

import { Layout, ProductContent } from '../../components';

const ProductList = () => {
  const { id } = useParams();

  return (
    <Layout>
      <ProductContent id={id} />
    </Layout>
  );
};

export default ProductList;
