type InputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

// LocalStorage and SessionStorage

export const LocalStorageForm = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = getCurrentStorage();
    const color = formData.color ?? "red";
    const password = document.querySelector(
      "input#password"
    ) as HTMLInputElement;

    const data = {
      ...formData,
      color,
      password: password.value,
    };
    console.log(data);

    sessionStorage.clear();
    (e.target as HTMLFormElement).reset();
  };

  const handleChange = (e: React.ChangeEvent<InputElements>) => {
    const { name, value } = e.target;
    const currentStorage = getCurrentStorage();
    const newStorage = { ...currentStorage };
    newStorage[name] = value;

    sessionStorage.setItem("formData", JSON.stringify(newStorage));
  };

  const getCurrentStorage = () => {
    const storage = sessionStorage.getItem("formData");

    if (storage) {
      return JSON.parse(storage);
    }

    return {};
  };

  const getInitialValue = (name: string) => {
    const currentStorage = getCurrentStorage();
    return currentStorage[name];
  };

  return (
    <div>
      <h2 className="form__title">Local Storage Form</h2>
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
            defaultValue={getInitialValue("email") ?? ""}
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
            defaultValue={getInitialValue("username") ?? ""}
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
            defaultValue={getInitialValue("color") ?? "red"}
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
            defaultValue={getInitialValue("bio") ?? ""}
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
