import CoursesPart from "../../components/coursesPart/CoursesPart";
import "./LoginAndRegisterPage.scss";
import ReviewsPart from "../../components/reviewsPart/ReviewsPart";
import Footer from "../../components/footerComponent/Footer";
import { useContext, useEffect, useState } from "react";
import LoginOrRegister from "../../components/loginComponent/LoginOrRegister";
import { UserContext } from "../userContext";

function LoginAndRegisterPage() {
  const data = ["", "", ""];
  const { userData, setUserData } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenedToLogin, setIsOpenedToLogin] = useState(false);

  const logout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setUserData(null);
        setLoggedIn(false);
      });
  };

  useEffect(() => {
    if (userData !== null) {
      setLoggedIn(true);
    }
  }, [userData]);

  return (
    <div className="profile">
      <div className="view">
        <h1>حسابي</h1>
        <p>سجل دخولك لتستطيع شراء الدورات</p>
      </div>
      {loggedIn ? (
        <div className="profileInfo">
          <div className="login-logout-btn" onClick={logout}>
            <span>تسجيل خروج</span>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
      ) : (
        <div className="loginOrRegister">
          {isOpenedToLogin ? (
            <LoginOrRegister
              setIsOpenedToLogin={setIsOpenedToLogin}
              setLoggedIn={setLoggedIn}
            />
          ) : (
            <div
              className="login-logout-btn"
              onClick={() => setIsOpenedToLogin(true)}
            >
              <span>تسجيل دخول</span>
              <i className="fa-regular fa-user"></i>
            </div>
          )}
        </div>
      )}
      <div className="courses">
        <div className="text">
          <h1>دوراتنا الأكثر شعبية</h1>
          <p>
            بعض الدورات المميزة لدينا تحت أيدي خبرائنا في المجالات الأكثر شعبية
            في عصر التكنولوجيا الحديث
          </p>
        </div>
        <CoursesPart data={data} />
      </div>
      <ReviewsPart />
      <Footer />
    </div>
  );
}

export default LoginAndRegisterPage;
