import clsx from 'clsx';
import BaseIcon from '../BaseIcon/BaseIcon';
import css from './BaseInput.module.css';

export default function BaseInput({
  icon,
  type = 'text',
  as = 'input',
  className,
  ...restProps
}) {
  const inputClasses = clsx(css.input, className, icon && css.withIcon);
  const InputElement = as;

  return (
    <div className={css.inputWrap}>
      <InputElement {...restProps} className={inputClasses} type={type} />
      {icon && (
        <BaseIcon className={css.icon} name={icon} width={20} height={20} />
      )}
    </div>
  );
}
