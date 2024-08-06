import "./features.scss";
function Features() {
  return (
    <div className="features">
      <div className="feature">
        <i className="fa-brands fa-slideshare"></i>
        <div className="text">
          <h2>تدريب العملي</h2>
          <p>
            بعد كل كورس يتم تدريب الطلاب بواسطة معلميهم بحيث يتمكن الطالب من
            تنفيذ ما تعلمه
          </p>
        </div>
      </div>
      <div className="feature">
        <i className="fa-solid fa-puzzle-piece"></i>{" "}
        <div className="text">
          <h2>مسابقات</h2>
          <p>
            تقام مسابقات من أجل تحفيز الطلاب أكثر على التعلم كما يكافأ الفائزون
            بجوائز قيمة
          </p>
        </div>
      </div>
      <div className="feature">
        <i className="fa-solid fa-cube"></i>
        <div className="text">
          <h2>جودة عالية</h2>
          <p>
            تقوم منظمتنا بتعيين خبراء في المجال ليتم تعليم الطلاب بأفضل جودة
            ممكنة
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
