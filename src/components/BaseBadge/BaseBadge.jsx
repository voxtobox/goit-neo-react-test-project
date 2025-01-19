import css from './BaseBadge.module.css';
import BaseIcon from '../BaseIcon/BaseIcon';

export default function BaseBadge({ text, icon }) {
  return (
    <div className={css.badge}>
      <BaseIcon width={16} height={16} name={icon} />
      <p>{text}</p>
    </div>
  );
}
