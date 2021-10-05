import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sign from "../pages/Sign";
import Login from "../pages/Login";
import PrivateRoute from "../pages/PrivateRoute";
import Privada from "../pages/Privada";
import { AuthProvider } from "../auth/Auth";

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
            <Login exact path="/login">
              <Sign />
            </Login>
            <PrivateRoute exact path="/private">
              <Sign />
            </PrivateRoute>
            <Privada exact path="/privada">
              <Sign />
            </Privada>
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
