import { useEffect, useRef } from "react";
import s from "./Login.module.css";

function setFormMessage(formElement, type, message){
  console.log(`${s.form__message}`)
  console.log(formElement)
  console.log(type);
  console.log(message);

  // const messageElement = formElement.getElementByClassName(`${s.form__message}`)
  // messageElement.textContent = message;
  // messageElement.classList.remove(`${s.form__message_error} ${s.form__message_success}`);
  // messageElement.classList.add(`${s.form__message_ + type}`)
}

function Login() {
  const loginForm = document.getElementById("login");
  const createAccountForm = useRef(null);

  useEffect(() => {
    const loginForm = document.getElementById("login");
    const createAccountForm = document.getElementById("createAccount");
    document
      .getElementById("createLinkAccount")
      .addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add(`${s.form__hidden}`);
        createAccountForm.classList.remove(`${s.form__hidden}`);
      });
    document.getElementById("linkLogin").addEventListener("click", (e) => {
      e.preventDefault();
      createAccountForm.classList.add(`${s.form__hidden}`);
      loginForm.classList.remove(`${s.form__hidden}`);
    });
  });

  console.log(loginForm);
  console.log(createAccountForm);
  
  // setFormMessage(loginForm, "success", "Wow you did it")

  return (
    <div className={s.container}>
      <form className={`${s.form}`} id="login">
        <h1 className={s.form__title}>Login</h1>
        <div className={`${s.form__message} ${s.form__message_error}`}></div>
        <div className={`${s.form__input_group}`}>
          <input
            type="text"
            className={`${s.form__input}`}
            autoFocus
            placeholder="Username or email"
          />
          <div className={`${s.form__input_error_message}`}></div>
        </div>
        <div className={`${s.form__input_group}`}>
          <input
            type="password"
            className={`${s.form__input}`}
            placeholder="Password"
          />
          <div className={`${s.form__input_error_message}`}></div>
        </div>
        <button className={`${s.form__button}`} type="submit">
          Continue
        </button>
        <p className={`${s.form__text}`}>
          <a href="./" className={`${s.form__link}`}>
            Forgot your password?
          </a>
        </p>
        <p className={`${s.form__text}`}>
          <a id="createLinkAccount" href="./" className={`${s.form__link}`}>
            Don't have an account? Create an account.
          </a>
        </p>
      </form>
      {/* SEPERATOR OF THE FORMS */}
      <form className={`${s.form}  ${s.form__hidden}`} ref={createAccountForm} id="createAccount">
        <h1 className={s.form__title}>Create Account</h1>
        <div className={`${s.form__message} ${s.form__message_error}`}></div>
        <div className={`${s.form__input_group}`}>
          <input
            type="text"
            className={`${s.form__input}`}
            autoFocus
            placeholder="Username"
          />
          <div className={`${s.form__input_error_message}`}></div>
        </div>
        <div className={`${s.form__input_group}`}>
          <input
            type="text"
            className={`${s.form__input}`}
            placeholder="Email Address"
          />
          <div className={`${s.form__input_error_message}`}></div>
        </div>
        <div className={`${s.form__input_group}`}>
          <input
            type="password"
            className={`${s.form__input}`}
            placeholder="Password"
          />
          <div className={`${s.form__input_error_message}`}></div>
        </div>
        <div className={`${s.form__input_group}`}>
          <input
            type="password"
            className={`${s.form__input}`}
            placeholder="Confirm Password"
          />
          <div className={`${s.form__input_error_message}`}></div>
        </div>
        <button className={`${s.form__button}`} type="submit">
          Continue
        </button>
        <p className={`${s.form__text}`}>
          <a id="linkLogin" href="./" className={`${s.form__link}`}>
            Already have an account? Sign in.
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
