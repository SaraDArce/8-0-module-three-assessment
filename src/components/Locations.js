import React from "react";
import "../App.css";

class Locations extends React.Component {
  constructor() {
    super();

    this.state = {
      locations: [],
    };
  }

  fetchLocations = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locations: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchLocations();
  };

  render() {
    let locationsToDisplay = this.state.locations.map((location) => {
      return (
        <div>
          <h2>{location.name} </h2>
          <h3>{location.terrain} </h3>
          <h3>{location.terrain} </h3>
        </div>
      );
    });

    return (
      <div className="locations">
        <div>
          <h1>List of Locations</h1>
          <button>Show Locations</button>
        </div>
        <div className="locations-container">{locationsToDisplay}</div>
      </div>
    );
  }
}

export default Locations;
