import { Formik, Form, Field, ErrorMessage } from "formik";

type ValidationErrorType = {
  email?: string;
  username?: string;
  password?: string;
  color?: string;
  bio?: string;
};

const initialFormValues = {
  email: "",
  username: "",
  password: "",
  color: "red",
  bio: "",
};

export const FormikComponentsForm = () => {
  const submitHandler = (
    values: typeof initialFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    resetForm();
  };

  const validate = (values: typeof initialFormValues) => {
    const errors: ValidationErrorType = {};

    const { email, username, password, color, bio } = values;

    if (!username) errors.username = "Username is required.";
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    if (!color) errors.color = "color is required.";
    if (!bio) errors.bio = "Bio is required.";

    return errors;
  };

  return (
    <div>
      <h2 className="form__title">Formik Components Form</h2>
      <Formik
        initialValues={initialFormValues}
        onSubmit={submitHandler}
        validate={validate}
      >
        <Form className="form">
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form__input"
            />
            <ErrorMessage name="email" className="error" component="small" />
          </div>
          <div className="form__group">
            <label htmlFor="username" className="form__label">
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="form__input"
            />
            <ErrorMessage name="username" className="error" component="small" />
          </div>
          <div className="form__group">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form__input"
            />{" "}
            <ErrorMessage name="password" className="error" component="small" />
          </div>
          <div className="form__group">
            <label htmlFor="color" className="form__label">
              Favorite Color?
            </label>
            <Field as="select" name="color" id="color" className="form__select">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>{" "}
            <ErrorMessage name="color" className="error" component="small" />
          </div>
          <div className="form__group">
            <label htmlFor="bio" className="form__label">
              Bio
            </label>
            <Field
              as="textarea"
              name="bio"
              id="bio"
              className="form__textarea"
            ></Field>{" "}
            <ErrorMessage name="bio" className="error" component="small" />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
