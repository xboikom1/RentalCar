import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={css.hero}>
      <div className={css.content}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.description}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={css.ctaButton} onClick={handleClick}>
          View Catalog
        </button>
      </div>
    </section>
  );
};

export default HomePage;
