import { useState } from "react";
import Table from "react-bootstrap/Table";
import Loading from "../../components/loading/Loading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SmallExample() {
  const [loaded, setLoaded] = useState();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/reviewsFromAdmin")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        setLoaded(true);
      });
  }, []);

  const postReview = (i, id) => {
    setLoaded(false);
    fetch("http://localhost:3000/toClient", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: reviews[i].content,
        where: reviews[i].where,
        createdBy: reviews[i].createdBy,
      }),
    }).then(() => {
      setReviews((reviews) => {
        return [...reviews.slice(0, i), ...reviews.slice(i + 1)];
      });
      setLoaded(true);
      fetch(`http://localhost:3000/reviewFromAdmin/${id}`, {
        method: "DELETE",
      });
    });
  };

  const deleteReview = (i, id) => {
    setLoaded(false);
    fetch(`http://localhost:3000/reviewFromAdmin/${id}`, {
      method: "DELETE",
    }).then(() => {
      setReviews((reviews) => {
        return [...reviews.slice(0, i), ...reviews.slice(i + 1)];
      });
      setLoaded(true);
    });
  };

  return (
    <>
      {loaded ? (
        <>
          {reviews[0] ? (
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, i) => {
                  return (
                    <tr key={i}>
                      <td>{review.createdBy}</td>
                      <td>{review.where}</td>
                      <td>
                        {review.content.length > 20
                          ? review.content.slice(0, 20) + "..."
                          : review.content}
                      </td>
                      <td className="d-flex justify-content-center align-items-center gap-2">
                        <button
                          className="btn bg-danger  px-2"
                          style={{ color: "#fff" }}
                          onClick={() => deleteReview(i, review._id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn bg-dark  px-2"
                          style={{ color: "#fff" }}
                          onClick={() => postReview(i, review._id)}
                        >
                          Post
                        </button>
                        <Link
                          to={`/reviews/${review._id}`}
                          className="btn bg-primary  px-2"
                          style={{ color: "#fff" }}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <h1>No Reviews</h1>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SmallExample;
