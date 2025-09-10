import css from "./CatalogPage.module.css";
import Filters from "../../components/Filters/Filters";

const CatalogPage = () => {
  return (
    <div className={css.pageContainer}>
      <Filters />
    </div>
  );
};

export default CatalogPage;
