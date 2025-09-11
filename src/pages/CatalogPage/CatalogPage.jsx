import css from "./CatalogPage.module.css";
import Filters from "../../components/Filters/Filters";
import CarsList from "../../components/CarsList/CarsList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
  return (
    <div className={css.pageContainer}>
      <Filters />
      <CarsList />
      <LoadMoreBtn />
    </div>
  );
};

export default CatalogPage;
