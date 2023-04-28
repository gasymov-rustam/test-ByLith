import { Card, FlexGap, HorizontalFlex, Skeleton } from '../../shared';

import cls from './Loader.module.scss';

export const Loader = ({ count = 4 }) => {
  const loaderCount = Array.from({ length: count }, (_, idx) => idx);

  return (
    <HorizontalFlex gap={FlexGap.XXL}>
      {loaderCount.map((idx) => {
        return (
          <Card className={cls.container} key={idx}>
            <Skeleton className={cls.card} />
            <Skeleton className={cls.title} />
            <Skeleton className={cls.price} />
          </Card>
        );
      })}
    </HorizontalFlex>
  );
};
