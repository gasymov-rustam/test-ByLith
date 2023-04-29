import { useGlobalContext } from '../../app';
import { FlexAlign, FlexJustify, VerticalFlex } from '../../shared';

import cls from './Error.module.scss';

export const Error = () => {
  const { state } = useGlobalContext();
  const { error } = state;

  return (
    <VerticalFlex align={FlexAlign.CENTER} justify={FlexJustify.CENTER} className={cls.error}>
      <p>Error during get data from server!</p>
      <p>Error message: {error}</p>
    </VerticalFlex>
  );
};
