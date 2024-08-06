import "./loading.css";

export default function Loading() {
  return (
    <div className="load">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
