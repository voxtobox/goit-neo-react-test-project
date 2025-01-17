import css from './BaseButton.module.css';
import clsx from 'clsx';

export default function BaseButton({ primary, onClick, children, className }) {
  const buttonClass = clsx(className, css.button, primary && css.primary);

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
