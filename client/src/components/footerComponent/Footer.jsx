import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <h1>! انضم اليوم إلى 7452 طالبا سعيد</h1>
      <p>لا تفوت العروض والحق الدورات المجانية</p>
      <Link to="/courses">
        <button className="b_tn px-5">ابدأ التعلم</button>
      </Link>
    </footer>
  );
}

export default Footer;
