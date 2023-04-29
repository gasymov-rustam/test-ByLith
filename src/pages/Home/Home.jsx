import { AllCards, Header, Logo, Pagination } from '../../components';

import cls from './Home.module.scss';

export const Home = () => {
  return (
    <section className={cls.container}>
      <Header />
      <Logo />
      <div className={cls.other}>
        <AllCards />
        <Pagination />
      </div>
    </section>
  );
};
