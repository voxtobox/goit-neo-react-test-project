import BaseButton from '../BaseButton/BaseButton';
import BaseIcon from '../BaseIcon/BaseIcon';
import css from './BaseButtonIcon.module.css';

export default function BaseButtonIcon({ icon, children }) {
  return (
    <BaseButton className={css.button}>
      <BaseIcon name={icon} width={32} height={32} />
      <p>{children}</p>
    </BaseButton>
  );
}
