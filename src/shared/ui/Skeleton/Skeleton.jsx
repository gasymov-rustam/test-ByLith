import clsx from 'clsx';
import { memo } from 'react';

import cls from './Skeleton.module.scss';

export const Skeleton = memo((props) => {
  const { className, height, width, border } = props;

  const styles = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={clsx(cls.Skeleton, className)} style={styles} />;
});
