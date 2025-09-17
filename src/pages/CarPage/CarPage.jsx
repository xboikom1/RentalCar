import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCarById } from "../../redux/cars/operations";
import css from "./CarPage.module.css";
import { selectCarById, selectIsLoading } from "../../redux/cars/selectors";
import { formatMileage } from "../../utils/formatMileage";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import BookingForm from "../../components/BookingForm/BookingForm";

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarById);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (!car && !isLoading) return <ErrorComponent>Car not found</ErrorComponent>;
  if (!car) return <></>;

  return (
    <div className={css.pageContainer}>
      <div className={css.imageContainer}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.carImage}
        />
      </div>
      <div className={css.carInfo}>
        <div>
          <div className={css.header}>
            <h1 className={css.title}>
              {car.brand} {car.model}, {car.year}
            </h1>
            <div className={css.location}>
              <svg className={css.locationIcon}>
                <use href="/icons.svg#icon-location" />
              </svg>
              <p>{car.address.split(", ").slice(-2).join(", ")} </p>
              <p className={css.mileage}>
                Mileage: {formatMileage(car.mileage)} km
              </p>
            </div>
          </div>
          <p className={css.price}>${car.rentalPrice}</p>
          <p className={css.description}>{car.description}</p>
        </div>
        <div className={css.descriptionSections}>
          <div className={css.section}>
            <h3 className={css.sectionTitle}>Rental Conditions:</h3>
            <div className={css.additionalInfoContainer}>
              {car.rentalConditions.map((condition, index) => (
                <p key={index} className={css.addInfo}>
                  <svg className={css.icon}>
                    <use href="/icons.svg#icon-check-circle"></use>
                  </svg>
                  {condition}
                </p>
              ))}
            </div>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>Car Specifications:</h3>
            <div className={css.additionalInfoContainer}>
              <p className={css.addInfo}>
                <svg className={css.icon}>
                  <use href="/icons.svg#icon-calendar" />
                </svg>
                Year: {car.year}
              </p>
              <p className={css.addInfo}>
                <svg className={css.icon}>
                  <use href="/icons.svg#icon-car" />
                </svg>
                Type: {car.type}
              </p>

              <p className={css.addInfo}>
                <svg className={css.icon}>
                  <use href="/icons.svg#icon-fuel-pump" />
                </svg>
                Fuel Consumption: 10.5
              </p>
              <p className={css.addInfo}>
                <svg className={css.icon}>
                  <use href="/icons.svg#icon-gear" />
                </svg>
                Engine Size: 3.6L V6
              </p>
            </div>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>
              Accessories and functionalities:
            </h3>
            <div className={css.additionalInfoContainer}>
              {car.accessories.map((accessory, index) => (
                <p key={index} className={css.addInfo}>
                  <svg className={css.icon}>
                    <use href="/icons.svg#icon-check-circle"></use>
                  </svg>
                  {accessory}
                </p>
              ))}
              {car.functionalities.map((func, index) => (
                <p key={index} className={css.addInfo}>
                  <svg className={css.icon}>
                    <use href="/icons.svg#icon-check-circle"></use>
                  </svg>
                  {func}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};
export default CarPage;
