import css from "./CatalogPage.module.css";
import Filters from "../../components/Filters/Filters";
import CarsList from "../../components/CarsList/CarsList";

const CatalogPage = () => {
  return (
    <div className={css.pageContainer}>
      <Filters />
      <CarsList />
    </div>
  );
};

export default CatalogPage;
