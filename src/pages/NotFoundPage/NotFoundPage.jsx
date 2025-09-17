import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>404</h1>
        <h2 className={css.subtitle}>Page Not Found</h2>
        <p className={css.message}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={css.homeButton}>
          Go Back Home
        </Link>
      </div>
      <div className={css.carIcon}>🚗</div>
    </div>
  );
};

export default NotFoundPage;
