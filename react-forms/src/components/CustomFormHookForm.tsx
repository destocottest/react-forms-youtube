import { useForm } from "../hooks/useForm";

export const CustomFormHookForm = () => {
  const { formData, handleChange, reset } = useForm();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(formData);
    reset();
  };

  return (
    <div>
      <h2 className="form__title">Custom Form Hook Form</h2>
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
            value={formData.email}
            onChange={handleChange}
          />
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
            value={formData.username}
            onChange={handleChange}
          />
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
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form__group">
          <label htmlFor="color" className="form__label">
            Favorite Color?
          </label>
          <select
            name="color"
            id="color"
            className="form__select"
            value={formData.color}
            onChange={handleChange}
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="bio" className="form__label">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            className="form__textarea"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
