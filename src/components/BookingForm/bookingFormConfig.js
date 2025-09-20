import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  comment: Yup.string().max(500, "Comment must be less than 500 characters"),
});

export const initialValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};
