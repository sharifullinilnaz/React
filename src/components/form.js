import React from "react";

const Form = props => (
  <div>
    <h3>Поиск погоды в других городах:</h3>
    <form onSubmit={props.weatherMethod} class="form">
      <input type="text" name="city" class="form-control" placeholder="Введите город"/>
      <button type="submit" class="btn btn-outline-primary search">Узнать погоду</button>
      </form>
  </div>
)

export default Form;
