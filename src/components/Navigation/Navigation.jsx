import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

export default function Navigation() {
  const getLinkClass = ({ isActive }) =>
    clsx(css.navLink, isActive && css.active);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={getLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}
