import { useRef } from "react";

export const RefForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current?.value,
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    console.log(formData);

    e.currentTarget.reset();
  };

  return (
    <div>
      <h2 className="form__title">Ref Form</h2>
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
            ref={emailRef}
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
            ref={usernameRef}
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
            ref={passwordRef}
          />
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
