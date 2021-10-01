import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sign from "../pages/Sign";

function App({ isOpen, setOpen }) {
  console.log(isOpen);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/sign-up">
            <Sign />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
