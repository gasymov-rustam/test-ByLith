import { createPortal } from 'react-dom';

export const Portal = (props) => {
  const { children, elements = document.body } = props;

  return createPortal(children, elements);
};
