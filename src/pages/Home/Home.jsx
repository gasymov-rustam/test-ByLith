import { Header, Logo } from '../../components';

import cls from './Home.module.scss';

export const Home = () => {
  return (
    <section className={cls.container}>
      <Header />
      <Logo />
      <div className={cls.other}>Home</div>
    </section>
  );
};
