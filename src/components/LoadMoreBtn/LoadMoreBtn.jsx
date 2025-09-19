import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import css from "./LoadMoreBtn.module.css";
import {
  selectPage,
  selectTotalPages,
  selectIsLoading,
} from "../../redux/cars/selectors";
import { fetchCars } from "../../redux/cars/operations";
import { selectFilters } from "../../redux/filters/selectors";
import Loader from "../Loader/Loader";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const prevPageRef = useRef(null);
  const page = Number(useSelector(selectPage));
  const totalPages = Number(useSelector(selectTotalPages));
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters);
  const isVisible = page < totalPages && page !== 1;

  useEffect(() => {
    if (
      prevPageRef.current !== null &&
      prevPageRef.current < page &&
      !isLoading
    ) {
      window.scrollTo({
        top: window.scrollY + 600,
        behavior: "smooth",
      });
    }
    prevPageRef.current = page;
  }, [page, isLoading]);

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: page + 1, filters }));
  };

  if (!isVisible) return null;

  return (
    <>
      {isLoading && page > 1 ? (
        <Loader />
      ) : (
        <div className={css.loadMoreContainer} ref={buttonRef}>
          <button
            className={css.loadMoreButton}
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default LoadMoreBtn;
