import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import css from "./Filters.module.css";
import { selectBrands } from "../../redux/brands/selectors";
import { useEffect } from "react";
import { fetchBrands } from "../../redux/brands/operations";
import SelectComponent from "../SelectComponent/SelectComponent";
import {
  setBrand,
  setRentalPrice,
  setMinMileage,
  setMaxMileage,
} from "../../redux/filters/slice";
import { fetchCars } from "../../redux/cars/operations";

const Filters = () => {
  const dispatch = useDispatch();

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [minMileage, setMinMileageLocal] = useState("");
  const [maxMileage, setMaxMileageLocal] = useState("");

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const brands = useSelector(selectBrands);
  const brandsOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = [
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
    { value: "80", label: "80" },
  ];

  const handleBrandChange = (option) => {
    setSelectedBrand(option);
  };

  const handlePriceChange = (option) => {
    setSelectedPrice(option);
  };

  const handleMinMileageChange = (e) => {
    setMinMileageLocal(e.target.value);
  };

  const handleMaxMileageChange = (e) => {
    setMaxMileageLocal(e.target.value);
  };

  const handleSearch = () => {
    const filters = {
      brand: selectedBrand?.value || "",
      rentalPrice: selectedPrice?.value || "",
      minMileage: parseInt(minMileage) || 0,
      maxMileage: parseInt(maxMileage) || 0,
    };

    dispatch(setBrand(filters.brand));
    dispatch(setRentalPrice(filters.rentalPrice));
    dispatch(setMinMileage(filters.minMileage));
    dispatch(setMaxMileage(filters.maxMileage));

    dispatch(fetchCars(filters));
  };

  return (
    <section className={css.filtersContainer}>
      <label className={css.label}>
        Car brand
        <SelectComponent
          options={brandsOptions}
          placeholder="Choose a brand"
          value={selectedBrand}
          onChange={handleBrandChange}
        />
      </label>

      <label className={css.label}>
        Price / 1 hour
        <SelectComponent
          options={priceOptions}
          placeholder="Choose a price"
          value={selectedPrice}
          onChange={handlePriceChange}
        />
      </label>

      <div className={css.inputsContainer}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.inputsGroup}>
          <input
            type="number"
            placeholder="From"
            className={css.input}
            value={minMileage}
            onChange={handleMinMileageChange}
          />
          <input
            type="number"
            placeholder="To"
            className={css.input}
            value={maxMileage}
            onChange={handleMaxMileageChange}
          />
        </div>
      </div>

      <button className={css.searchButton} onClick={handleSearch}>
        Search
      </button>
    </section>
  );
};

export default Filters;
