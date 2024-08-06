import Table from "react-bootstrap/Table";
import { useEffect, useRef, useState } from "react";
import Loading from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CoursesTable() {
  const [courses, setCourses] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const ref = useRef();

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  const deleteUser = (i, id) => {
    Swal.fire({
      icon: "question",
      title: `؟${courses[i].name} هل تريد حقا حذف `,
      showDenyButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "red",
      denyButtonColor: "#0274be",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/courses/${id}`, { method: "DELETE" });
        setCourses((courses) => [
          ...courses.slice(0, i),
          ...courses.slice(i + 1),
        ]);
      }
    });
  };

  return (
    <>
      {courses ? (
        courses[0] ? (
          <div className="content">
            <input
              type="text"
              className="searchInput"
              placeholder="Search by courseName..."
              ref={ref}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <Table striped bordered hover className="table2">
              <thead>
                <tr>
                  <th>image</th>
                  <th>name</th>
                  <th>description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses
                  .filter((course) => {
                    return course.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase());
                  })
                  .map((course, i) => {
                    return (
                      <tr key={i}>
                        <td className="p-2">
                          <img
                            src={`http://localhost:3000/uploads/${course.image}`}
                            alt=""
                            height={100}
                            width={170}
                          />
                        </td>
                        <td className="p-3">{course.name}</td>
                        <td className="p-3">
                          {course.description.length > 20
                            ? course.description.slice(0, 20) + " ..."
                            : course.description}
                        </td>
                        <td
                          className="d-flex justify-content-center align-items-center gap-2"
                          style={{ height: "120px" }}
                        >
                          <button
                            className="btn bg-danger"
                            style={{ color: "#fff" }}
                            onClick={() => deleteUser(i, course._id)}
                          >
                            Delete
                          </button>
                          <Link
                            to={`/updateCourse/${course._id}`}
                            className="btn bg-primary"
                            style={{ color: "#fff" }}
                          >
                            Update
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        ) : (
          <h1>No Courses</h1>
        )
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CoursesTable;
