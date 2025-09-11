import { useDispatch, useSelector } from "react-redux";
import css from "./Filters.module.css";
import { selectBrands } from "../../redux/brands/selectors";
import { useEffect } from "react";
import { fetchBrands } from "../../redux/brands/operations";
import SelectComponent from "../SelectComponent/SelectComponent";

const Filters = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

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

  const handleSearch = () => {};

  return (
    <section className={css.filtersContainer}>
      <label className={css.label}>
        Car brand
        <SelectComponent options={brandsOptions} placeholder="Choose a brand" />
      </label>

      <label className={css.label}>
        Price / 1 hour
        <SelectComponent options={priceOptions} placeholder="Choose a price" />
      </label>

      <div className={css.inputsContainer}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.inputsGroup}>
          <input
            type="number"
            placeholder="From"
            className={css.input}
            // onChange={(e) => handleInputChange("mileageFrom", e.target.value)}
          />
          <input type="number" placeholder="To" className={css.input} />
        </div>
      </div>

      <button className={css.searchButton} onClick={handleSearch}>
        Search
      </button>
    </section>
  );
};

export default Filters;
