import css from "./CarListItem.module.css";

const CarListItem = ({ car, isFavorite = false, onFavoriteToggle, onReadMore }) => {
  const formatMileage = (mileage) => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleFavoriteClick = () => {
    onFavoriteToggle(car.id);
  };

  return (
    <div className={css.carCard}>
      <div className={css.imageContainer}>
        <img
          src={car.img}
          alt={`Image of ${car.model}`}
          className={css.carImage}
        />
        <button className={css.favoriteButton} onClick={handleFavoriteClick}>
          <svg
            className={`${css.heartIcon} ${
              !isFavorite ? css.visible : css.hidden
            }`}
          >
            <use href="/icons.svg#icon-heart" />
          </svg>
          <svg
            className={`${css.heartIcon} ${
              isFavorite ? css.visible : css.hidden
            }`}
          >
            <use href="/icons.svg#icon-active-heart" />
          </svg>
        </button>
      </div>

      <div className={css.carInfo}>
        <div className={css.header}>
          <h3 className={css.title}>
            <span>{car.brand} </span>
            <span className={css.model}>{car.model}</span>,
            <span> {car.year}</span>
          </h3>
          <span className={css.price}>${car.rentalPrice}</span>
        </div>

        <div className={css.carDetails}>
          <span className={css.detail}>
            {car.address.split(", ").slice(-2).join(" | ")}
          </span>
          <span className={css.detail}>{car.rentalCompany}</span>
          <span className={css.detail}>{car.type}</span>
          <span className={css.detail}>{formatMileage(car.mileage)} km</span>
        </div>
      </div>

      <button className={css.readMoreButton} onClick={() => onReadMore(car)}>
        Read more
      </button>
    </div>
  );
};

export default CarListItem;
