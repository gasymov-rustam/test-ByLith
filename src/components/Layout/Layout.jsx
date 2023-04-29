import { Header } from '../Header';
import { Logo } from '../Logo';

import cls from './Layout.module.scss';

export const Layout = ({ children, withLogo = false }) => {
  return (
    <section className={cls.container}>
      <Header />
      {withLogo && <Logo />}
      <div className={cls.children}>{children}</div>
    </section>
  );
};
