import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from ".components/Home";
import Movies from ".components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </Router>

    // <div className="Home">
    //   <main>
    //     <h1>Welcome to GhibliApp</h1>
    //   </main>
    // </div>
  );
}

export default App;
