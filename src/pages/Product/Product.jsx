import { useParams } from 'react-router-dom';

import { Header } from '../../components';

export const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      Product {id}
    </div>
  );
};
