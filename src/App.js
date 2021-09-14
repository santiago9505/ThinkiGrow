import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import Campañas from "./components/Campañas/Campañas";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Description />
      <Campañas />
    </div>
  );
}

export default App;
