import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Login from "../../components/loginComponent/Login";
import Loading from "../../components/loading/Loading";

function Layout() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
          setLoggedIn(true);
        }
        setLoaded(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="layout">
      {loaded ? (
        <>
          {loggedIn ? (
            <>
              <Navbar />
              <div className="view">
                <Outlet />
              </div>
            </>
          ) : (
            <div className="view">
              <h1>Dashboard</h1>
              <Login setLoggedIn={setLoggedIn} />
            </div>
          )}
        </>
      ) : (
        <div className="view">
          <Loading />
        </div>
      )}
    </main>
  );
}

export default Layout;
