import css from './BaseButton.module.css';
import clsx from 'clsx';

export default function BaseButton({
  primary,
  children,
  className,
  width,
  active,
  ...restProps
}) {
  const buttonClass = clsx(
    className,
    css.button,
    primary && css.primary,
    active && css.active
  );

  return (
    <button {...restProps} className={buttonClass} style={{ width }}>
      {children}
    </button>
  );
}
