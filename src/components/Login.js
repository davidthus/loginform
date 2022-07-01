import s from "./Login.module.css";

function Login() {
  return (
    <div class={s.container}>
      <form class={`${s.form} ${s.form__hidden}`} id="login">
        <h1 class={s.form__title}>Login</h1>
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
          <a href="#" className={`${s.form__link}`}>
            Forgot your password?
          </a>
        </p>
        <p className={`${s.form__text}`}>
          <a id="createLinkAccount" href="./" className={`${s.form__link}`}>
            Don't have an account? Create an account.
          </a>
        </p>
      </form>
      <form class={`${s.form}`} id="createAccount">
        <h1 class={s.form__title}>Create Account</h1>
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
