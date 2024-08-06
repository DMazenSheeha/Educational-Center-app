import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Navigate, useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function UpdateCourse() {
  const { id } = useParams();
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
        setLoaded(true);
      });
  }, []);

  const addCourse = (e) => {
    const courseData = new FormData();
    courseData.set("name", name);
    courseData.set("description", description);
    courseData.set("image", files?.[0]);
    e.preventDefault();

    fetch(`http://localhost:3000/courses/${id}`, {
      method: "PUT",
      credentials: "include",
      body: courseData,
    }).then(setUpdated(true));
  };
  if (updated) {
    return <Navigate to="/courses" />;
  }
  return (
    <>
      {loaded ? (
        <Form onSubmit={(e) => addCourse(e)}>
          <Row className="w-75">
            <Form.Label column="md" lg={2}>
              Name
            </Form.Label>
            <Col>
              <Form.Control
                size="md"
                type="text"
                className="bg bg-dark text-light"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Row>
          <br />
          <Row className="w-75">
            <Form.Label column="md" lg={2}>
              Description
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                className="bg bg-dark text-light"
                value={description}
                style={{ height: "300px" }}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
          </Row>
          <br />
          <Row className="w-75">
            <Form.Label column="md" lg={2}>
              Upload Image
            </Form.Label>
            <Col>
              <Form.Control
                size="md"
                type="file"
                className="bg bg-dark text-light"
                onChange={(ev) => setFiles(ev.target.files)}
              />
            </Col>
          </Row>
          <button className="mt-5 btn btn-dark p-2 px-5">Update</button>
        </Form>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UpdateCourse;
