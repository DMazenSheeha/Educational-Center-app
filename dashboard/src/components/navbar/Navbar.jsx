import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body bg-transparent mb-3 position-absolute w-100 px-4"
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Settings
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="link p-2">
                    Home
                  </Link>

                  <Link to={"/courses"} className="link p-2">
                    Courses
                  </Link>

                  <Link to={"/addCourse"} className="link p-2">
                    Add Course
                  </Link>

                  <Link to={"/users"} className="link p-2">
                    Users
                  </Link>

                  <Link to={"/reviews"} className="link p-2">
                    Reviews
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
