import "./singleReview.scss";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import { useParams } from "react-router-dom";

function SingleReview() {
  const [loaded, setLoaded] = useState(false);
  const [reviewDetails, setReviewDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/reviewsFromAdmin/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewDetails(data);
        setLoaded(true);
      });
  }, []);
  return (
    <>
      {loaded ? (
        <div className="reviewDetails bg-light text-dark p-5">
          <p>
            <span>CretedBy: </span> {reviewDetails.createdBy}
          </p>
          <p>
            <span>Location: </span> {reviewDetails.where}
          </p>
          <p>
            <span>Content: </span> {reviewDetails.content}
          </p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SingleReview;
