import CoursesPart from "../../components/coursesPart/CoursesPart";
import "./coursesPage.scss";
import ReviewsPart from "../../components/reviewsPart/ReviewsPart";
import Footer from "../../components/footerComponent/Footer";

function CoursesPage() {
  return (
    <div className="coursesPage">
      <div className="view">
        <h1>دوراتنا</h1>
        <p>
          دوراتنا مميزة تحت أيدي خبراء في المجالات الأكثر شعبية في عصر
          التكنولوجيا الحديث
          <br />
          التي تجعلك قادرا على اللحاق بمحترفي مجالك والعمل في أفضل الشركات
        </p>
      </div>
      <div className="courses">
        <CoursesPart />
      </div>
      <ReviewsPart />
      <Footer />
    </div>
  );
}

export default CoursesPage;
