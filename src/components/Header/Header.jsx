import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BaseIcon from '../BaseIcon/BaseIcon';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrapper + ' container'}>
        <Link to="/">
          <BaseIcon
            className={css.logo}
            name={'icon-logo'}
            width={136}
            height={15}
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
