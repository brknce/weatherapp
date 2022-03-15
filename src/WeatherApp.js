import React, { Component } from "react";
import "./App.css";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: 0, desc: "", icon: "", loading: true };
  }

  componentDidMount() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APIkey=e1c3b00d59cd0d10f31c5a0a3a12a1f0`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          temp: responseData.main.temp,
          desc: responseData.weather[0].description,
          icon: responseData.weather[0].icon,
          loading : false
        });
      });
  }

  render() {
    const imgSrc =
      "http://openweathermap.org/img/w/" + this.state.icon + ".png";
    if (this.state.loading) {
      return <div>loading...</div>;
    } else {
      return (
        <div className="App">
          <p>Temprature : {this.state.temp} °C</p>
          <p>Description : {this.state.desc}</p>
          <img src={imgSrc} alt="Weather icon" />
        </div>
      );
    }
  }
}

export default WeatherApp;
