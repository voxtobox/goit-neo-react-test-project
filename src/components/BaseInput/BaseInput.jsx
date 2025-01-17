import clsx from 'clsx';
import BaseIcon from '../BaseIcon/BaseIcon';
import css from './BaseInput.module.css';

export default function BaseInput({
  icon,
  name,
  type = 'text',
  value,
  placeholder,
  id,
  disabled,
}) {
  const inputClasses = clsx(css.input, icon && css.withIcon);

  return (
    <div className={css.inputWrap}>
      <input
        className={inputClasses}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
        disabled={disabled}
      />
      {icon && (
        <BaseIcon className={css.icon} name={icon} width={20} height={20} />
      )}
    </div>
  );
}
