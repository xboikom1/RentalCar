import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCars } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";
import { selectFavorites } from "../../redux/favourites/selectors";
import { toggleFavorite } from "../../redux/favourites/slice";
import CarListItem from "../CarListItem/CarListItem";
import css from "./CarsList.module.css";

const CarsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleFavoriteToggle = (carId) => {
    dispatch(toggleFavorite(carId));
  };

  const handleReadMore = (car) => {
    navigate(`/cars/${car.id}`);
  };

  return (
    <section className={css.carsList}>
      {cars.map((car) => (
        <CarListItem
          key={car.id}
          car={car}
          isFavorite={favorites.includes(car.id)}
          onFavoriteToggle={handleFavoriteToggle}
          onReadMore={handleReadMore}
        />
      ))}
    </section>
  );
};

export default CarsList;
