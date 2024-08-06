import "./contactCards.scss";

function ContactCards() {
  return (
    <div className="contactCards">
      <div className="contactCard">
        <i className="fa-solid fa-phone-volume icon"></i>
        <h5>24x7 اتصل بنا</h5>
        <h5>+1234-456-789</h5>
      </div>
      <div className="contactCard">
        <i className="fa-regular fa-envelope icon"></i>
        <h5>أرسل لنا</h5>
        <h5>email@example.com</h5>
      </div>
      <div className="contactCard">
        <i className="fa-solid fa-location-dot icon"></i>
        <h5>المقر الرئيسي</h5>
        <h5>New York, NY 10160</h5>
      </div>
    </div>
  );
}

export default ContactCards;
