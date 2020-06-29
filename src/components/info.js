import React from "react";
import logo from './logo.png';

const Info = () => (
  <div class="container-fluid top-line-container">
			<div class="row">
				<div class="col-1">
          <img src={logo} class="logo"/>
				</div>
				<div class="col-10">
          <h1>Приложение для отображения погоды</h1>
          <p>Узнай погоду в интересующем тебя городе!</p>
        </div>
      </div>
  </div>
);

export default Info;
