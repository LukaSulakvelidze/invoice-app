import * as yup from "yup";

export const signUpValidation = yup.object({
  fullName: yup.string().min(3).required("Name must not be empty"),
  email: yup
    .string()
    .matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/, {
      message: "Looks like this is not an email",
      excludeEmptyString: true,
    })
    .required("Email must not be empty"),
  password: yup.string().min(8).required("Password must not be empty"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password mismatch")
    .required("Password mismatch"),
});

export const signInValidation = yup.object({
  email: yup
    .string()
    .matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/, {
      message: "Looks like this is not an email",
      excludeEmptyString: true,
    })
    .required("Looks like this is not an email"),
  password: yup.string().min(8).required("Password must not be empty"),
});

export const validationSchema = yup.object({
  billFrom: yup.object({
    streetAddress: yup.string().required("Required"),
    city: yup.string().required("Required"),
    postCode: yup.string().required("Required"),
    country: yup.string().required("Required"),
  }),
  billTo: yup.object({
    clientName: yup.string().required("Required"),
    clientEmail: yup.string().email("Invalid email").required("Required"),
    streetAddress: yup.string().required("Required"),
    city: yup.string().required("Required"),
    postCode: yup.string().required("Required"),
    country: yup.string().required("Required"),
  }),
  invoiceDate: yup.string().required("Required"),
  paymentTerms: yup.string().required("Required"),
  projectDescription: yup.string().required("Required"),
  invoiceItems: yup.array().of(
    yup.object().shape({
      itemName: yup.string().required("Required"),
      itemQuantity: yup
        .number()
        .required("Required")
        .min(1, "Quantity must be at least 1"),
      itemPrice: yup
        .number()
        .required("Required")
        .min(0, "Price must be a positive number"),
    })
  ),
});
