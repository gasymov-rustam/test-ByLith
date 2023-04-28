import { FlexAlign, FlexJustify, VerticalFlex } from '../../shared';

import cls from './Error.module.scss';

export const Error = () => (
  <VerticalFlex align={FlexAlign.CENTER} justify={FlexJustify.CENTER} className={cls.error}>
    Error during get data from server!!!!
  </VerticalFlex>
);
