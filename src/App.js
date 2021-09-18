import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import Campañas from "./components/Campañas/Campañas";
import AllCampaigns from "./components/AllCampaigns/AllCampaigns";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Description />
      <Campañas />
      <AllCampaigns />
    </div>
  );
}

export default App;
