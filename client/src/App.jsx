import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layoutPage/Layout";
import Home from "./pages/homePage/Home";
import CoursesPage from "./pages/coursesPage/CoursesPage";
import LoginAndRegisterPage from "./pages/login&registerPage/LoginAndRegisterPage";
import UserConextProvider from "./pages/userContext";
import ContactPage from "./pages/contactPage/ContactPage";
import { Link } from "react-router-dom";
import CoursePage from "./pages/coursePage/CoursePage";

function App() {
  return (
    <UserConextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CoursePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<LoginAndRegisterPage />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="mainbox" style={{ height: "100vh" }}>
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">
                  Page is not found
                  <p>
                    Let&apos;s go <Link to="/">Home</Link> and try from there.
                  </p>
                </div>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserConextProvider>
  );
}

export default App;
