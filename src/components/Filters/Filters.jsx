import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import css from "./Filters.module.css";
import { useEffect } from "react";
import { setFilters } from "../../redux/filters/slice";
import { fetchCars } from "../../redux/cars/operations";
import SelectComponent from "./SelectComponent";
import { selectIsLoading } from "../../redux/cars/selectors";
import axios from "axios";

const Filters = () => {
  const dispatch = useDispatch();

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [minMileage, setMinMileageLocal] = useState("");
  const [maxMileage, setMaxMileageLocal] = useState("");
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("/brands");
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchBrands();
  }, []);

  const isLoading = useSelector(selectIsLoading);
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
    const value = e.target.value.replace(/\D/g, "");
    setMinMileageLocal(value);
  };

  const handleMaxMileageChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMaxMileageLocal(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const filters = {
      brand: selectedBrand?.value || "",
      rentalPrice: selectedPrice?.value || "",
      minMileage: parseInt(minMileage) || 0,
      maxMileage: parseInt(maxMileage) || 0,
    };

    dispatch(setFilters(filters));
    dispatch(fetchCars({ filters }));
  };

  return (
    <form className={css.filtersContainer}>
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
          formatSelectedValue={(value) => `To $${value}`}
        />
      </label>

      <div className={css.inputsContainer}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.inputsGroup}>
          <input
            type="text"
            placeholder="From"
            className={css.input}
            value={`From ${minMileage}`}
            onChange={handleMinMileageChange}
          />
          <input
            type="text"
            placeholder="To"
            className={css.input}
            value={`To ${maxMileage}`}
            onChange={handleMaxMileageChange}
          />
        </div>
      </div>

      <button
        className={css.searchButton}
        onClick={handleSearch}
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Filters;
