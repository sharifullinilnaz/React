import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"
import WeatherTopCities from "./components/weatherTopCities"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


const API_KEY = "59e3dbd533eb07643002c8fc268b9bea";
const PLACES = [
  { name: "Казань", zip: "551487" },
  { name: "Альметьевск", zip: "582432" },
  { name: "Нижнекамск", zip: "521118" },
  { name: "Набережные Челны", zip: "523750" }
];
class App extends React.Component {

  constructor() {
  super();
  this.state = {
    activePlace: 0,
  };
}

  state = {
    temp: undefined,
    pressure: undefined,
    humidity: undefined,
    wind: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        country: data.sys.country,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        pressure: undefined,
        humidity: undefined,
        wind: undefined,
        country: undefined,
        error: "Введите город"
      });
    }
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div class="App">
        <div class="info">
          <Info />
        </div>
        <div class="row main">
          <div class="col-8">
            <h2>Погода в крупнейших городах Татарстана</h2>
            <div class="topCity">
              {PLACES.map((place, index) => (
                  <button type="button" class="btn btn-primary check"
                    key={index}
                    onClick={() => {
                        this.setState({ activePlace: index });
                      }}
                      >
                      {place.name}
                      </button>
                    ))}
            </div>
            <WeatherTopCities
              key={activePlace}
              zip={PLACES[activePlace].zip}
            />
          </div>
          <div class="col-3 formDiv bordered">
          <Form weatherMethod={this.gettingWeather}/>
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            wind={this.state.wind}
            country={this.state.country}
            error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
