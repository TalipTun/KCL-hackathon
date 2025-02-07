import Navbar from "../components/navigationBar";
import Footer from "../components/footer";
import AgriTrack from "../pictures/AgriTrack.jpg"; // Importing image

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${AgriTrack})`, // Using the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)"
      }}></div>
      <Navbar />
      <div style={{ textAlign: "center", padding: "3rem", color: "black", position: "relative", marginBottom: "300px"}}>
        <h1>Welcome to AgriTrack</h1>
        <p style={{marginTop: "40px"}}>Your trusted partner in modern agriculture. We provide cutting-edge solutions to help you track, analyze, and optimize your farm’s productivity.</p>
        <p>Explore our services and take your agricultural business to the next level with AgriTrack.</p>
      </div>
    </div>
  );
}

export default Home;