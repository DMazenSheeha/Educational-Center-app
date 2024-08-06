import { useEffect } from "react";
import "./coursePage.scss";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footerComponent/Footer";

function CoursePage() {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    fetch(`https://educational-center-api-gie7.vercel.app/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
        setLoaded(true);
      });
  }, []);

  return (
    <>
      {loaded ? (
        <div>
          <div className="coursePage">
            <div className="course">
              <img
                src={`https://educational-center-api-gie7.vercel.app/uploads/${courseData.image}`}
                alt="image"
              />
              <h1>{courseData.name}</h1>
              <p>{courseData.description}</p>
              <Link to={"/"}>Go to Home</Link>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="view" style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
    </>
  );
}

export default CoursePage;
