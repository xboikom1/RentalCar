import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchCarById } from "../../redux/cars/operations";

import css from "./CarPage.module.css";
import { selectCarById } from "../../redux/cars/selectors";
import { formatMileage } from "../../utils/formatMileage";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date()
    .min(new Date(), "Booking date must be in the future")
    .nullable(),
  comment: Yup.string().max(500, "Comment must be less than 500 characters"),
});

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarById);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Booking data:", values);
    setTimeout(() => {
      alert("Booking submitted successfully!");
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  if (!car) return <div className={css.loading}>Car not found</div>;

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
      <div className={css.bookingSection}>
        <div className={css.bookingCard}>
          <h2 className={css.bookingTitle}>Book your car now</h2>
          <p className={css.bookingSubtitle}>
            Stay connected. We are always ready to help you.
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              bookingDate: "",
              comment: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className={css.bookingForm}>
                <div className={css.fieldContainer}>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className={`${css.input} ${
                      errors.name && touched.name ? css.inputError : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.error}
                  />
                </div>

                <div className={css.fieldContainer}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className={`${css.input} ${
                      errors.email && touched.email ? css.inputError : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.error}
                  />
                </div>

                <div className={css.fieldContainer}>
                  <Field
                    type="date"
                    name="bookingDate"
                    placeholder="Booking date"
                    className={`${css.input} ${
                      errors.bookingDate && touched.bookingDate
                        ? css.inputError
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="bookingDate"
                    component="div"
                    className={css.error}
                  />
                </div>

                <div className={css.fieldContainer}>
                  <Field
                    as="textarea"
                    name="comment"
                    placeholder="Comment"
                    className={`${css.textarea} ${
                      errors.comment && touched.comment ? css.inputError : ""
                    }`}
                  />
                  <ErrorMessage
                    name="comment"
                    component="div"
                    className={css.error}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${css.submitButton} ${
                    isSubmitting ? css.submitButtonDisabled : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
