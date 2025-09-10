import { useDispatch, useSelector } from "react-redux";
import css from "./Filters.module.css";
import Select from "react-select";
import { selectBrands } from "../../redux/brands/selectors";
import { useEffect } from "react";
import { fetchBrands } from "../../redux/brands/operations";

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
    { value: "to 30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
    { value: "80", label: "80" },
  ];
  const handleSearch = () => {};

  return (
    <div className={css.filtersContainer}>
      <label className={css.label}>
        Car brand
        <Select
          options={brandsOptions}
          placeholder="Choose a brand"
          isClearable
        />
      </label>

      <label className={css.label}>
        Price / 1 hour
        <Select
          options={priceOptions}
          placeholder="Choose a price"
          isClearable
        />
      </label>

      <div className={css.filterGroup}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.inputGroup}>
          {/* <input
            type="number"
            placeholder="From"
            className={css.input}
            value={filters.mileageFrom}
            onChange={(e) => handleInputChange("mileageFrom", e.target.value)}
          />
          <input
            type="number"
            placeholder="To"
            className={css.input}
            value={filters.mileageTo}
            onChange={(e) => handleInputChange("mileageTo", e.target.value)}
          /> */}
        </div>
      </div>

      <button className={css.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
