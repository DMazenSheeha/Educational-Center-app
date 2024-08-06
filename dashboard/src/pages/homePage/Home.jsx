import logo from "/logo.svg";

const HomeStyling = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Home() {
  return (
    <div style={HomeStyling}>
      <img src={logo} alt="" style={{ width: "300px" }} />
    </div>
  );
}

export default Home;
