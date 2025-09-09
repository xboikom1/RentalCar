import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <svg>
        <use href="/icons.svg#icon-logo"></use>
      </svg>
    </div>
  );
};

export default Header;
