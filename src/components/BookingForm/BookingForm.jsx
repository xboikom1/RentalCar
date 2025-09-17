import css from "./BookingForm.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { initialValues, validationSchema } from "./bookingFormConfig";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const bookingData = {
      ...values,
      bookingDate: selected.toISOString().split("T")[0],
    };

    setTimeout(() => {
      resetForm();
      setSelected();
      setSubmitting(false);
      toast.success("Successfully sent!");
    }, 500);
  };

  return (
    <div className={css.bookingSection}>
      <h2 className={css.bookingTitle}>Book your car now</h2>
      <p className={css.bookingSubtitle}>
        Stay connected. We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, setFieldValue }) => (
          <Form className={css.bookingForm}>
            <div className={css.fieldContainer}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={clsx(css.input, {
                  [css.inputError]: errors.name && touched.name,
                })}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.fieldContainer}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={clsx(css.input, {
                  [css.inputError]: errors.email && touched.email,
                })}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.fieldContainer}>
              <div className={css.datePickerWrapper}>
                <Field
                  type="text"
                  name="bookingDate"
                  placeholder="Booking date"
                  value={selected ? selected.toLocaleDateString() : ""}
                  onClick={() => setShowCalendar(!showCalendar)}
                  readOnly
                  className={clsx(css.input, css.dateInput, {
                    [css.inputError]: errors.bookingDate && touched.bookingDate,
                  })}
                />

                {showCalendar && (
                  <div className={css.calendarDropdown}>
                    <DayPicker
                      animate
                      mode="single"
                      onSelect={(date) => {
                        setSelected(date);
                        setFieldValue(
                          "bookingDate",
                          date ? date.toISOString().split("T")[0] : ""
                        );
                        setShowCalendar(false);
                      }}
                    />
                  </div>
                )}
              </div>
              <ErrorMessage
                name="bookingDate"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.fieldContainer}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={clsx(css.textarea, {
                  [css.inputError]: errors.comment && touched.comment,
                })}
              />
              <ErrorMessage
                name="comment"
                component="span"
                className={css.error}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={clsx(css.submitButton, {
                [css.submitButtonDisabled]: isSubmitting,
              })}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
