import Select from "react-select";

const SelectComponent = ({ options, placeholder }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid var(--inputs)",
      borderRadius: "12px",
      backgroundColor: "var(--inputs)",
      boxShadow: "none",
      cursor: "pointer",
      minWidth: "204px",
      boxSizing: "border-box",
      height: "44px",
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
  return (
    <Select
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};

export default SelectComponent;
