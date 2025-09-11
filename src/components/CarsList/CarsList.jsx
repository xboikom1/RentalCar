import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCars } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";
import CarListItem from "../CarListItem/CarListItem";
import css from "./CarsList.module.css";

const CarsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleFavoriteToggle = (carId) => {
    console.log("Toggle favorite for car:", carId);
  };

  const handleReadMore = (car) => {
    navigate(`/cars/${car.id}`);
  };

  return (
    <div className={css.carsList}>
      {cars.map((car) => (
        <CarListItem
          key={car.id}
          car={car}
          onFavoriteToggle={handleFavoriteToggle}
          onReadMore={handleReadMore}
        />
      ))}
    </div>
  );
};

export default CarsList;
