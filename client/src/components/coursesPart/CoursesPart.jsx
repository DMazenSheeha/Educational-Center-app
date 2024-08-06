import { useState } from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import "./coursesPart.scss";
import { useEffect } from "react";
import Loading from "../loading/Loading";

// eslint-disable-next-line react/prop-types
function CoursesPart() {
  const [courses, setCourses] = useState(["", ""]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoaded(true);
      });
  }, []);

  return (
    <>
      {loaded ? (
        <div className="coursesCards px-3">
          {
            // eslint-disable-next-line react/prop-types
            courses.map((course, i) => {
              return <CourseCard key={i} courseData={course} />;
            })
          }
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
``;

export default CoursesPart;
