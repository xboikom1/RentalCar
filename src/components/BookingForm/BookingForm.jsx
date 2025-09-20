import css from "./BookingForm.module.css";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { initialValues, validationSchema } from "./bookingFormConfig";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { formatDateRange } from "../../utils/formatMileage";

const BookingForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState();
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target))
        setShowCalendar(false);
    };

    if (showCalendar)
      document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    resetForm();
    setSelected();
    setSubmitting(false);
    toast.success("Successfully sent!");
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
              <div className={css.datePickerWrapper} ref={calendarRef}>
                <Field
                  type="text"
                  name="bookingDate"
                  placeholder="Booking date"
                  value={formatDateRange(selected)}
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
                      mode="range"
                      selected={selected}
                      onSelect={(range) => {
                        setSelected(range);
                        const dateValue = `${range.from.toLocaleDateString(
                          "sv-SE"
                        )} - ${range.to.toLocaleDateString("sv-SE")}`;

                        setFieldValue("bookingDate", dateValue);
                      }}
                      disabled={{ before: new Date() }}
                    />
                    <div className={css.calendarButtonContainer}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelected(undefined);
                          setFieldValue("bookingDate", "");
                        }}
                        className={css.calendarButton}
                      >
                        Reset
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCalendar(false)}
                        className={css.calendarButton}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
