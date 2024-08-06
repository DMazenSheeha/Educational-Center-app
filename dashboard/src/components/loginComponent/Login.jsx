import "./login.scss";
import logo from "/public/logo.svg";
import { useState } from "react";
import Swal from "sweetalert2";
// eslint-disable-next-line react/prop-types
function LoginOrRegister({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();
    const fetched = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
    if (fetched.message) {
      Swal.fire({
        icon: "error",
        text: fetched.message,
      });
    } else {
      if (fetched.userName === "admin") {
        setLoggedIn(true);
      } else {
        Swal.fire({
          icon: "error",
          text: "Wrong Informations",
        });
      }
    }
  };

  return (
    <div className="loginAndRegisterForm">
      <h3 style={{ color: "#0274be" }}>تسجيل دخول</h3>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
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
        <button>تسجيل دخول</button>
      </form>
      <img src={logo} alt="" />
    </div>
  );
}

export default LoginOrRegister;
