export const FormDataForm = () => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData);
    console.log(data);

    // const email = formData.get("email");
    // const username = formData.get("username");
    // const password = formData.get("password");
    // const color = formData.get("color");
    // const bio = formData.get("email");

    // console.log({ email, username, password, color, bio });

    form.reset();
  };

  return (
    <div>
      <h2 className="form__title">Form Data Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input type="email" id="email" name="email" className="form__input" />
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
            defaultValue="red"
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
          <textarea name="bio" id="bio" className="form__textarea"></textarea>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
