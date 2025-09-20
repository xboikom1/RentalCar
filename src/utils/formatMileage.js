export const formatMileage = (mileage) => {
  return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const formatDateRange = (range) => {
  if (!range) return "";
  if (range.from && range.to) {
    return `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`;
  }
  return "";
};
