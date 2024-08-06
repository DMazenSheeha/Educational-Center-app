/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function CourseCard({ courseData }) {
  const { _id, image, name, description } = courseData;
  return (
    <Card
      style={{
        width: "20rem",
        backgroundColor: "#fff",
        border: "none",
        boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
      }}
    >
      <Card.Img
        variant="top"
        src={`https://educational-center-api-gie7.vercel.app/uploads/${image}`}
        height={150}
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description.length > 40
            ? `${description.slice(0, 40)} ...`
            : description}
        </Card.Text>
        <Link to={`/courses/${_id}`} className="w-100">
          <Button className="w-100" style={{ backgroundColor: "#428bca" }}>
            ... المزيد
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
