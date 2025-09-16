import { useDispatch, useSelector } from "react-redux";
import css from "./LoadMoreBtn.module.css";
import {
  selectPage,
  selectTotalPages,
  selectIsLoading,
} from "../../redux/cars/selectors";
import { fetchCars } from "../../redux/cars/operations";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const page = Number(useSelector(selectPage));
  const totalPages = Number(useSelector(selectTotalPages));
  const isLoading = useSelector(selectIsLoading);
  const isVisible = page < totalPages;

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: page + 1 }));
  };

  if (!isVisible) return null;

  return (
    <div className={css.loadMoreContainer}>
      <button
        className={css.loadMoreButton}
        onClick={handleLoadMore}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
