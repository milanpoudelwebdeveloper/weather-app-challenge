import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import SunInfo from "./components/SunInfo/SunInfo";
import ExtendedForecast from "./components/ExtendedForecast/ExtendedForecast";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <WeatherInfo />
          <ExtendedForecast />
        </div>
        <SunInfo />
      </div>
    </div>
  );
}

export default App;
