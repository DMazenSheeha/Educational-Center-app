/* eslint-disable react/prop-types */
import "./review.scss";
import auther from "../../../public/profile.png";

// eslint-disable-next-line react/prop-types
function Review({ reviewData }) {
  return (
    <div className="review">
      <div className="top">
        <p>{reviewData.content}</p>
      </div>
      <div className="bottom">
        <img src={auther} alt="" />
        <div className="txt">
          <span className="auther">{reviewData.createdBy}</span>
          <span className="place">{reviewData.where}</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
