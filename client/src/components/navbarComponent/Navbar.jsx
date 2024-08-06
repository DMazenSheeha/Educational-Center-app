import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assests/logo.svg";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      className=" navbar pt-4 pb-4 position-absolute z-2 w-100"
    >
      <Container>
        <Navbar.Brand className="px-4">
          <Link to={"/"} className="link">
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="link c-w px-2">
              الرئيسية
            </Link>
            <Link to={"/courses"} className="link c-w px-2">
              دوراتنا
            </Link>
            <Link to={"/contact"} className="link c-w px-2">
              تواصل معنا
            </Link>
            <Link to={"/profile"} className="link c-w px-2">
              حسابي
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
