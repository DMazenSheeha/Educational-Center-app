import "./loginOrRegister.scss";
import logo from "../../assests/logo.svg";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { UserContext } from "../../pages/userContext";
// eslint-disable-next-line react/prop-types
function LoginOrRegister({ setIsOpenedToLogin, setLoggedIn }) {
  const [loginOrRegister, setLoginOrRegister] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { setUserData } = useContext(UserContext);
  const submitForm = async (e) => {
    e.preventDefault();
    const fetched = await fetch(`http://localhost:3000/${loginOrRegister}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        loginOrRegister === "login"
          ? JSON.stringify({
              email,
              password,
            })
          : JSON.stringify({
              email,
              password,
              userName,
            }),
    }).then((res) => res.json());
    if (fetched.message) {
      Swal.fire({
        icon: "error",
        text: fetched.message,
      });
    } else {
      fetch("http://localhost:3000/profile")
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setIsOpenedToLogin(false);
          setLoggedIn(true);
          window.location.reload();
        });
    }
  };

  return (
    <div className="loginAndRegisterForm">
      <div className="close" onClick={() => setIsOpenedToLogin(false)}>
        <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <h3>{loginOrRegister === "login" ? "تسجيل دخول" : "إنشاء حساب"}</h3>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        {loginOrRegister === "register" && (
          <>
            <div className="input">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                id="userName"
                required
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <i className="fa-solid fa-user"></i>
            </div>
          </>
        )}
        <div className="input">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <button>
          {loginOrRegister === "login" ? "تسجيل دخول" : "إنشاء حساب"}
        </button>
      </form>
      <span
        className="register"
        onClick={() =>
          setLoginOrRegister((state) => {
            return state === "login" ? "register" : "login";
          })
        }
      >
        {loginOrRegister === "login" ? " إنشاء حساب ؟" : "تسجيل دخول ؟"}
      </span>
      <img src={logo} alt="" />
    </div>
  );
}

export default LoginOrRegister;
