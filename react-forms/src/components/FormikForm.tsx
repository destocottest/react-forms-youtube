import { useFormik } from "formik";

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

export const FormikForm = () => {
  const submitHandler = (values: typeof initialFormValues) => {
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

  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: submitHandler,
    validateOnChange: false,
    validate: validate,
  });

  const { values, handleChange, handleSubmit, resetForm, errors } = formik;

  return (
    <div>
      <h2 className="form__title">Formik Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form__input"
            value={values.email}
            onChange={handleChange}
          />
          <small className="error">{errors.email}</small>
        </div>
        <div className="form__group">
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form__input"
            value={values.username}
            onChange={handleChange}
          />
          <small className="error">{errors.username}</small>
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form__input"
            value={values.password}
            onChange={handleChange}
          />
          <small className="error">{errors.password}</small>
        </div>
        <div className="form__group">
          <label htmlFor="color" className="form__label">
            Favorite Color?
          </label>
          <select
            name="color"
            id="color"
            className="form__select"
            value={values.color}
            onChange={handleChange}
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <small className="error">{errors.color}</small>
        </div>
        <div className="form__group">
          <label htmlFor="bio" className="form__label">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            className="form__textarea"
            value={values.bio}
            onChange={handleChange}
          ></textarea>
          <small className="error">{errors.bio}</small>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
