export const QuerySelectorForm = () => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const emailInput = document.querySelector("#email") as HTMLInputElement;
    const usernameInput = document.querySelector(
      "#username"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const colorInput = document.getElementById("color") as HTMLSelectElement;
    const bioInput = document.getElementById("bio") as HTMLTextAreaElement;

    const formData = {
      email: emailInput.value,
      username: usernameInput.value,
      password: passwordInput.value,
      color: colorInput.value,
      bio: bioInput.value,
    };

    console.log(formData);

    (evt.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <h2 className="form__title">Query Selector Form</h2>
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
