import React, { useRef } from "react";
import Auth from "../../js/auth/auth";
import "../../css/login.css";
import { Enumeration } from "../../resources/enumeration";
import { useNavigate, useLocation } from "react-router-dom";

export default function Home() {
  const userInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const login = async (e) => {
    e.preventDefault();
    let user = userInput.current.value;
    let pass = passwordInput.current.value;
    let res = await Auth.login(user, pass);
    if (res.status === Enumeration.Status.Ok) {
      navigate(from, { replace: true });
    }
  };

  return (
    <>
      <div
        className="modal login-modal"
        id="login-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog login-dialog">
          <div className="loginmodal-container">
            <div>
              <h1>Login to your account</h1>
            </div>
            <form>
              <input ref={userInput} type="text" name="user" placeholder="Username" />
              <input ref={passwordInput} type="password" name="pass" placeholder="Password" />
              <input
                type="submit"
                onClick={login}
                name="login"
                className="login loginmodal-submit"
                value="Login"
              />
            </form>

            <div className="login-help">
              <a href="Register">Register</a> - <a href="b">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
