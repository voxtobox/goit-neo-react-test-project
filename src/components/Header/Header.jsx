import Navigation from '../Navigation/Navigation';
import BaseIcon from '../BaseIcon/BaseIcon';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrapper + ' container'}>
        <BaseIcon
          className={css.logo}
          name={'icon-logo'}
          width={136}
          height={15}
        />
        <Navigation />
      </div>
    </header>
  );
}
