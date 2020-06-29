import React from "react";

class WeatherTopCities extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
return (
  <div class="top">
    <h2>
      Погода в {weatherData.name}
      <img src={iconUrl} alt={weatherData.description} />
    </h2>
    <p>Температура: {weatherData.main.temp}°</p>
    <p>Давление: {weatherData.main.pressure / 4 * 3 }мм</p>
    <p>Влажность: {weatherData.main.humidity}%</p>
    <p>Скорость ветра: {weatherData.wind.speed} миль/ч</p>
  </div>
);
  }
}

export default WeatherTopCities;
