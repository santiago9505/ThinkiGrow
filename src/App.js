import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import Comunities from "./components/Comunities/Comunities";
import Campañas from "./components/Campaigns/Campañas";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Description />
      <Comunities />
      <Campañas />
      <Footer />
    </div>
  );
}

export default App;
