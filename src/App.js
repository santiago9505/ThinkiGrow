import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import Campañas from "./components/Campañas/Campañas";
import AllCampaigns from "./components/AllCampaigns/AllCampaigns";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Description />
      <Campañas />
      <AllCampaigns />
      <Footer />
    </div>
  );
}

export default App;
