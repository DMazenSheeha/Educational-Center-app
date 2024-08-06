import { useState } from "react";
import Review from "../reviewCard/Review";
import "./ReviewsPart.scss";
import Loading from "../../../../dashboard/src/components/loading/Loading";
import { useEffect } from "react";

function ReviewsPart() {
  const [loaded, setLoaded] = useState(false);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/reviewsFromClient")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoaded(true);
      });
  }, []);

  return (
    <>
      {loaded ? (
        <>
          {reviews[0] ? (
            <div className="reviewsPart">
              <h1>! ما يقوله بعض الطلاب</h1>
              <div className="reviews">
                {reviews.map((review, i) => {
                  return <Review key={i} reviewData={review} />;
                })}
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ReviewsPart;
