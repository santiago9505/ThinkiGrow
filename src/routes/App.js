import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sign from "../pages/Sign";
import Project from "../pages/Project";
import Login from "../pages/Login";
import PrivateRoute from "../pages/PrivateRoute";
import { AuthProvider } from "../auth/Auth";
import CommunitiesPage from "../pages/CommunitiesPage";

function App({ isOpen, setOpen }) {
  console.log(isOpen);
  return (
    <AuthProvider>
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
            <Route exact path="/communities">
              <CommunitiesPage />
            </Route>
            <Route exact path="/project/:name">
              <Project />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/privada">
              <PrivateRoute />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
