import React from "react";
import "../App.css";

class People extends React.Component {
  render() {
    return (
      <div>
        <h1>Search for a Person</h1>
        <form>
          <input type="text" name="name" />
          <button type="submit">Find Your Person</button>
        </form>
      </div>
    );
  }
}

export default People;
