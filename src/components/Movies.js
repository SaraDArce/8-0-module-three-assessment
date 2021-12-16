import React from "react";
import "../App.css";

class Movies extends React.Component {
  constructor() {
    super();

    this.state = {
      films: [],
      currentFilm: null,
    };
  }

  fetchFilms = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          films: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchFilms();
  };

  handleDropDownChange = (e) => {
    let currentFilmObj = this.state.films.find((film) => {
      return film.title === e.target.value;
    });

    this.setState({
      currentFilm: currentFilmObj,
    });
  };

  render() {
    let dropDownFilms = this.state.films.map((film) => {
      return <option>{film.title}</option>;
    });

    return (
      <div className="Films">
        <h1>Select a Movie</h1>
        <select onChange={this.handleDropDownChange}>
          <option></option>
          {dropDownFilms}
        </select>

        <h1>{this.state.currentFilm?.title}</h1>
        <h2>{this.state.currentFilm?.release_date}</h2>
        <h3>{this.state.currentFilm?.description}</h3>
      </div>
    );
  }
}

export default Movies;
