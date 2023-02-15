import React from "react";
import Header from "./Header";
import Form from "./Form";
import "./Link.css";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="firstPage">
      <main>
        <nav className="order-pizza">
          <Link to="/" className="lAna">
            Anasayfa
          </Link>
          <Link to="/pizza" className="lPiz">
            Siparişini Buraya Tıklayarak Oluştur🔥
          </Link>
        </nav>
      </main>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/pizza" component={Form} />
        </Switch>
      </div>
    </div>
  );
};
export default App;
