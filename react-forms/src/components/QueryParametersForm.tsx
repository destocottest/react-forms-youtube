import { useSearchParams } from "react-router-dom";

type InputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export const QueryParametersForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<InputElements>) => {
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(searchParams);
    const color = formData.color ?? "red";
    const password = document.getElementById("password") as HTMLInputElement;

    const data = {
      ...formData,
      color,
      password: password.value,
    };

    console.log(data);

    setSearchParams(undefined);
    e.currentTarget.reset();
    password.value = "";
  };

  return (
    <div>
      <h2 className="form__title">Query Parameters Form</h2>
      <form className="form" onSubmit={submitHandler}>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form__input"
            onChange={handleChange}
            defaultValue={searchParams.get("email") ?? ""}
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
            onChange={handleChange}
            defaultValue={searchParams.get("username") ?? ""}
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
            onChange={handleChange}
            defaultValue={searchParams.get("color") ?? "red"}
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
            onChange={handleChange}
            defaultValue={searchParams.get("bio") ?? ""}
          ></textarea>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
