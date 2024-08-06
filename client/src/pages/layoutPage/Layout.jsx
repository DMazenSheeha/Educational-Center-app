import { Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "../../components/navbarComponent/Navbar";
import { useContext, useEffect } from "react";
import { UserContext } from "../userContext";

function Layout() {
  const { setUserData } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.message) {
          setUserData(data);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Layout;
