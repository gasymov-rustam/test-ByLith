import { useParams } from 'react-router-dom';

import { Header, ProductContent } from '../../components';

export const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      Product {id}
      <ProductContent id={id} />
    </div>
  );
};
