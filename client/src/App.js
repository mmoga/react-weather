import React, { Component } from "react";
import "./App.css";

import { getWeather } from './services/weather';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      currentWeather: {}
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLatChange(e) {
    this.setState({
      lat: +e.target.value
    });
  }
  handleLonChange(e) {
    this.setState({
      lon: +e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('whoa. WHOA!');
    getWeather(this.state.lat, this.state.lon)
      .then(response => {
        const currentWeather = response.data.currently;
        this.setState({
          currentWeather: currentWeather
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <h1>React Weather</h1>
        <p>Enter your latitude and longitude to get the weather!</p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Latitude:
            <input
              type="number"
              min="-90"
              max="90"
              onChange={e => this.handleLatChange(e)}
              value={this.state.lat}
              required
            />
          </label>
          <label>
            Longitude:
            <input
              type="number"
              min="-180"
              max="180"
              onChange={e => this.handleLonChange(e)}
              value={this.state.lon}
              required
            />
          </label>
          <button type="submit">Get The Weather!</button>
        </form>
        <pre>
          {JSON.stringify(this.state.currentWeather, null, 4)}
        </pre>
      </div>
    );
  }
}

export default App;
