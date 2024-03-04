import { useState } from "react";

const initialValues = {
  email: "",
  username: "",
  password: "",
  color: "red",
  bio: "",
};

export const MultiPageForm = () => {
  const [formData, setFormData] = useState(initialValues);
  const [page, setPage] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const preventSubmitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <h2 className="form__title">Multi Page Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        {page === 1 && (
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
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onKeyDown={preventSubmitOnEnter}
            />
          </div>
        )}
        {page === 2 && (
          <>
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
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                onKeyDown={preventSubmitOnEnter}
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
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                onKeyDown={preventSubmitOnEnter}
              />
            </div>
          </>
        )}
        {page === 3 && (
          <>
            <div className="form__group">
              <label htmlFor="color" className="form__label">
                Favorite Color?
              </label>
              <select
                name="color"
                id="color"
                className="form__select"
                value={formData.color}
                onChange={(e) =>
                  setFormData({ ...formData, color: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
              ></textarea>
            </div>
          </>
        )}
        {page > 1 && (
          <button
            className="button"
            type="button"
            onClick={() => setPage(page - 1)}
          >
            PREV
          </button>
        )}
        {page < 3 && (
          <button
            className="button"
            type="button"
            onClick={() => setPage(page + 1)}
          >
            NEXT
          </button>
        )}
        {page === 3 && (
          <button className="button" type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};
