import { formatMileage } from "../../utils/formatMileage";
import css from "./CarListItem.module.css";

const CarListItem = ({
  car,
  isFavorite = false,
  onFavoriteToggle,
  onReadMore,
}) => {
  const handleFavoriteClick = () => {
    onFavoriteToggle(car.id);
  };

  return (
    <li className={css.carCard}>
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
            <p>
              {car.brand} <span className={css.model}>{car.model}</span>,{" "}
              {car.year}
            </p>
          </h3>
          <span className={css.price}>${car.rentalPrice}</span>
        </div>

        <div className={css.carDetails}>
          <p className={css.detail}>
            {car.address.split(", ").slice(-2).join(" | ")}
          </p>
          <p className={css.detail}>{car.rentalCompany}</p>
          <p className={css.detail}>{car.type}</p>
          <p className={css.detail}>{formatMileage(car.mileage)} km</p>
        </div>
      </div>

      <button className={css.readMoreButton} onClick={() => onReadMore(car)}>
        Read more
      </button>
    </li>
  );
};

export default CarListItem;
