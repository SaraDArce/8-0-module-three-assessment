import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from ".components/Home";
import Movies from ".components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
      <nav>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </nav>
    </div>

    // <Router>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/movies">Movies</Link>
    //       </li>
    //       <li>
    //         <Link to="/people">People</Link>
    //       </li>
    //       <li>
    //         <Link to="/locations">Locations</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/movies" component={Movies} />
    //     <Route path="/people" component={People} />
    //     <Route path="/locations" component={Locations} />
    //   </Switch>
    // </Router>
  );
}

export default App;
