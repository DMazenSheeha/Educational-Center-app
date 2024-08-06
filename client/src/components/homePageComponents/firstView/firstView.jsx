import "./firstView.scss";
import { Link } from "react-router-dom";

function FirstView() {
  return (
    <div className="v-1">
      <div className="text c-w">
        <h1>تعلم من خبراء الصناعة</h1>
        <p>
          معنا ستتمكن من تعلم المهارات المطلوبة في سوق العمل باحترافية تحت أيدي
          خبراء المجال
        </p>

        <Link to="/courses">
          <button className="b_tn">الدورات</button>
        </Link>
      </div>
    </div>
  );
}

export default FirstView;
