import { useState } from "react";
import ContactCards from "../../components/contactCards/contactCards";
import Footer from "../../components/footerComponent/Footer";
import "./contactPage.scss";
import { useContext } from "react";
import { UserContext } from "../userContext";
import Swal from "sweetalert2";

function ContactPage() {
  const [content, setContent] = useState("");
  const [where, setWhere] = useState("");
  const { userData } = useContext(UserContext);

  const sendReview = (e) => {
    console.log(userData);
    e.preventDefault();
    if (!userData) {
      Swal.fire({
        icon: "error",
        text: "سجل دخولك لتضيف رأيك",
        confirmButtonText: "Later",
        confirmButtonColor: "#0274be",
      });
    } else {
      fetch("http://localhost:3000/toAdmin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          where,
          createdBy: userData.userName,
        }),
      }).then(() => {
        setContent("");
        setWhere("");
      });
    }
  };

  return (
    <div className="contactPage">
      <div className="view">
        <h1>تواصل معنا</h1>
        <p>يمكنك التواصل معنا عن طريق الوسائل المتاحة أو إضافة رأيك هنا</p>
      </div>
      <ContactCards />
      <form className="contactForm " onSubmit={(ev) => sendReview(ev)}>
        <div className="input">
          <label htmlFor="location">من أين أنت</label>
          <input
            type="text"
            id="location"
            required
            value={where}
            onChange={(e) => setWhere(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="location">عبر عن رأيك</label>
          <input
            type="text"
            id="location"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button>إرسال</button>
      </form>
      <Footer />
    </div>
  );
}

export default ContactPage;
