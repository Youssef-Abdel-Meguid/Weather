import React, { Component } from "react";
import Weather from "./components/Weather";
import Input from "./components/Input";

import "bootstrap/dist/css/bootstrap.min.css";

const apiKey = "c673bba7ea3b29dc2d504a6a101e2613";

export default class App extends Component {
  state = {
    tempreature: "",
    humidity: "",
    city: "",
    country: "",
    description: "",
    error: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    );
    const weatherData = await api.json();
    console.log(weatherData);
    

    if (city && country) {
      this.setState({
        tempreature: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        city: weatherData.name,
        country: weatherData.sys.country,
        description: weatherData.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        tempreature: '',
        humidity: '',
        city: '',
        country: '',
        description: '',
        error: 'Please Enter City & Country Name'
      });
      alert(this.state.error);
    }
  };

  render() {
    return (
      <div className='bg-light'>
        <Input handleSubmit={this.handleSubmit} />
        <Weather weatherData={this.state}/>
      </div>
    );
  }
}
