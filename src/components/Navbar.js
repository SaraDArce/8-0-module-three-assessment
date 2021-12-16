import React from "react";
import "../App.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
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
      </div>
    );
  }
}

export default Navbar;
