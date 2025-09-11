import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={css.header}>
      <a aria-label="Logo" href="/">
        <svg className={css.logo}>
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </a>

      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cars"
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
