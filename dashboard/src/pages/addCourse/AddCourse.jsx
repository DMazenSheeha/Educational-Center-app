import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Navigate } from "react-router-dom";

function AddCourse() {
  const [added, setAdded] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState("");

  const addCourse = (e) => {
    const courseData = new FormData();
    courseData.set("name", name);
    courseData.set("description", description);
    courseData.set("image", files[0]);
    e.preventDefault();

    fetch("http://localhost:3000/courses", {
      method: "POST",
      credentials: "include",
      body: courseData,
    }).then(() => setAdded(true));
  };

  if (added) {
    return <Navigate to="/courses" />;
  }
  return (
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
            required
            onChange={(ev) => setFiles(ev.target.files)}
          />
        </Col>
      </Row>
      <button className="mt-5 btn btn-dark p-2 px-5">Add</button>
    </Form>
  );
}

export default AddCourse;
