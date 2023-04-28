import clsx from 'clsx';

import cls from './Button.module.scss';

export const Button = (props) => {
  const { className, disabled, children, ...otherProps } = props;

  const mods = {
    [cls.disabled]: disabled,
  };

  return (
    <button type="button" className={clsx(cls.button, mods, className)} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
};
