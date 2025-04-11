import AboutUs from "./Pages/AboutUs";
import FrontEndMain from "./Pages/FrontEndMain";
import GameDevMain from "./Pages/GameDevMain";
import HeroGradient from "./heroSection/HeroGradient";
import HeroMain from "./heroSection/HeroMain";
import NavBarMain from "./navbar/NavBarMain";
import { Routes, Route } from "react-router-dom";
import DataScienceMain from "./Pages/DataScienceMain";
import Footer from "./sections/Footer";
import MasterPlatform from "./sections/MasterPlatform";
import FrontendCard from "./sections/FrontendCard";

function App() {
  return (
    <main className="w-full h-full border-[1px] border-[black]">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <MasterPlatform/>
      <FrontendCard/>
      <Footer />
      <Routes>
        <Route path="/Frontend" element={<FrontEndMain />} />
        <Route path="/GameDev" element={<GameDevMain />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/Data Science" element={<DataScienceMain />} />
      </Routes>
    </main>
  );
}

export default App;
