import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, disabled = false, loading = false }) => {
  return (
    <div className={css.loadMoreContainer}>
      <button
        className={css.loadMoreButton}
        onClick={onClick}
        disabled={disabled || loading}
      >
        {loading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
