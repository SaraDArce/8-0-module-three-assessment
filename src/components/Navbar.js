import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <Link to="/">
          <img
            className="dog-popcorn"
            src="https://blog.myollie.com/content/images/2019/11/dog-in-sunglasses-eating-movie-theater-popcorn.jpg"
            alt="dog popcorn"
          />
        </Link>

        <Link to="/movies">Movies</Link>

        <Link to="/people">People</Link>

        <Link to="/locations">Locations</Link>
      </nav>
    );
  }
}

export default Navbar;
