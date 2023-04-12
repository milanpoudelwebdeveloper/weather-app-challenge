import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import SunInfo from "./components/SunInfo/SunInfo";

function App() {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <NavBar />
          <WeatherInfo />
        </div>
        <SunInfo />
      </div>
    </div>
  );
}

export default App;
