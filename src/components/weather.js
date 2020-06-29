import React from "react";

const Weather = props => (
  <div class="weather">
  { props.city &&
    <div>
      <h2>Погода в  {props.city}, {props.country}</h2>
      <p>Температура: {props.temp}°</p>
      <p>Давление: {props.pressure / 4 * 3 }мм</p>
      <p>Влажность: {props.humidity}%</p>
      <p>Скорость ветра: {props.wind} миль/ч</p>
    </div>
  }
  <p>{props.error}</p>
  </div>
);

export default Weather;
