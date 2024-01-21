import { useState } from "react";

export const MultipleStatesForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("red");
  const [bio, setBio] = useState("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = { email, username, password, color, bio };
    console.log(formData);

    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setColor("red");
    setBio("");
  };

  return (
    <div>
      <h2 className="form__title">Multiple States Form</h2>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={color}
            onChange={(e) => setColor(e.target.value)}
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
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
