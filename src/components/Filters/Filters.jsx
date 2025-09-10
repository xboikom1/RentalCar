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
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
    { value: "80", label: "80" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid var(--inputs)",
      borderRadius: "12px",
      backgroundColor: "var(--inputs)",
      boxShadow: "none",
      cursor: "pointer",
      minWidth: "204px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "12px 16px",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "125%",
      color: "var(--main)",
      margin: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "16px",
      lineHeight: "125%",
      fontWeight: "500",
      color: "var(--main)",
      margin: 0,
    }),
    input: (provided) => ({
      ...provided,
      fontSize: "16px",
      lineHeight: "125%",
      fontWeight: "500",
      color: "var(--main)",
      margin: 0,
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: null,
    menu: (provided) => ({
      ...provided,
      borderRadius: "14px",
      boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
      border: "1px solid rgba(138, 138, 137, 0.2)",
      marginTop: "4px",
    }),
    menuList: (provided) => ({
      ...provided,
      borderRadius: "14px",
      padding: 0,
      paddingRight: "8px",
      maxHeight: "272px",
      overflowY: "auto",
      scrollbarWidth: "thin",
      scrollbarColor: "rgba(138, 138, 137, 0.3) transparent",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "16px",
      lineHeight: "1.25",
      color: state.isSelected
        ? "white"
        : state.isFocused
        ? "#121417"
        : "rgba(18, 20, 23, 0.5)",
      padding: "12px 16px",
      backgroundColor: state.isSelected
        ? "#3470ff"
        : state.isFocused
        ? "#f7f7fb"
        : "transparent",
    }),
  };

  const DropdownIndicator = ({ selectProps }) => (
    <div
      style={{
        padding: "0 18px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="16"
        height="16"
        style={{
          transform: selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease",
        }}
      >
        <use href="/icons.svg#icon-arrow" />
      </svg>
    </div>
  );

  const handleSearch = () => {};

  return (
    <div className={css.filtersContainer}>
      <label className={css.label}>
        Car brand
        <Select
          options={brandsOptions}
          placeholder="Choose a brand"
          styles={customStyles}
          components={{ DropdownIndicator }}
        />
      </label>

      <label className={css.label}>
        Price / 1 hour
        <Select
          options={priceOptions}
          placeholder="Choose a price"
          styles={customStyles}
          components={{ DropdownIndicator }}
        />
      </label>

      <div className={css.filterGroup}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.inputGroup}>
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
    </div>
  );
};

export default Filters;
