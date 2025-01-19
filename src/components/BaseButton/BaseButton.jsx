import css from './BaseButton.module.css';
import clsx from 'clsx';

export default function BaseButton({
  primary,
  onClick,
  children,
  className,
  ...restProps
}) {
  const buttonClass = clsx(className, css.button, primary && css.primary);

  return (
    <button {...restProps} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
