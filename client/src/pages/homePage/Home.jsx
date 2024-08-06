import "./home.scss";
import FirstView from "../../components/homePageComponents/firstView/firstView";
import Features from "../../components/homePageComponents/features/Features";
import CoursesPart from "../../components/coursesPart/CoursesPart";
import ReviewsPart from "../../components/reviewsPart/ReviewsPart";
import Footer from "../../components/footerComponent/Footer";

function Home() {
  return (
    <div className="home">
      <FirstView />
      <Features />
      <div className="courses">
        <div className="text">
          <h1>دوراتنا الأكثر شعبية</h1>
          <p>
            بعض الدورات المميزة لدينا تحت أيدي خبرائنا في المجالات الأكثر شعبية
            في عصر التكنولوجيا الحديث
          </p>
        </div>
        <CoursesPart />
      </div>
      <ReviewsPart />
      <Footer />
    </div>
  );
}

export default Home;
