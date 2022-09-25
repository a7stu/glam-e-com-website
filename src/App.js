import './App.css';
import Carousel from "./Carousel";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Final from "./Final";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/products"> 
            <Header />
            <Home />
          </Route>

          <Route path="/finalize">
            <Header />
            <Final />
          </Route>

          <Route path="/">    
            <Header />
            <Carousel />
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
