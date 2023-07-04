import React from 'react';
import { BrowserRouter  as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";
import Story from "./routes/About/Story";
import StrawHat from "./routes/About/StrawHat";
import Organization from "./routes/About/Organization";
import DevilFruit from "./routes/About/DevilFruit";
import Birthday from "./routes/About/Birthday";
import EastBlue from "./components/Story So Far/EastBlue";
import Alabasta from "./components/Story So Far/Alabasta";
import Skypiea from "./components/Story So Far/Skypiea";
import DavyBackFigth from "./components/Story So Far/DavyBackFigth";
import WaterSeven from "./components/Story So Far/WaterSeven";
import IniesLobby from "./components/Story So Far/IniesLobby";
import ThrillerBark from "./components/Story So Far/ThrillerBark";
import SobaodyArchipelago from "./components/Story So Far/SobaodyArchipelago";
import AmazonLily from "./components/Story So Far/AmazonLily";
import ImpelDown from "./components/Story So Far/ImpelDown";
import MarinefordWar from "./components/Story So Far/MarinefordWar";
import FishmanIsland from "./components/Story So Far/FishmanIsland";
import PunkHazard from "./components/Story So Far/PunkHazard";
import Dressrosa from "./components/Story So Far/Dressrosa";
import Zou from "./components/Story So Far/Zou";
import WholeCakeIsland from "./components/Story So Far/WholeCakeIsland";
import Levely from "./components/Story So Far/Levely";
import LandOfWano from "./components/Story So Far/LandOfWano";
import Character from "./components/Character";
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* navbar */}
          <Route path="/" element={<Home/>}/>
          <Route path="/quiz" element={<Quiz/>}/>

          {/* navbar about hover */}
          <Route path="/about/story" element={<Story/>}/>
          <Route path="/about/strawhat" element={<StrawHat/>}/>
          <Route path="/about/organization" element={<Organization/>}/>
          <Route path="/about/devilfruit" element={<DevilFruit/>}/>
          <Route exact path="/about/birthday" element={<Birthday/>}/>

          <Route path="/character/:characterId"  element={<Character/>} />

          {/* components for about */}
          <Route path="/about/story/east_blue" element={<EastBlue/>}/>
          <Route path="/about/story/alabasta"  element={<Alabasta/>} />
          <Route path="/about/story/skypiea"  element={<Skypiea/>} />
          <Route path="/about/story/davy_back_fight"  element={<DavyBackFigth/>} />
          <Route path="/about/story/water_seven"  element={<WaterSeven/>} />
          <Route path="/about/story/inies_lobby"  element={<IniesLobby/>} />
          <Route path="/about/story/thriller_bark"  element={<ThrillerBark/>} />
          <Route path="/about/story/sabaody_archipelago"  element={<SobaodyArchipelago/>} />
          <Route path="/about/story/amazon_lily"  element={<AmazonLily/>} />
          <Route path="/about/story/impel_down" element={<ImpelDown/>} />
          <Route path="/about/story/marineford_war"  element={<MarinefordWar/>} />
          <Route path="/about/story/fishman_island"  element={<FishmanIsland/>} />
          <Route path="/about/story/punk_hazard"  element={<PunkHazard/>} />
          <Route path="/about/story/dressrosa"  element={<Dressrosa/>} />
          <Route path="/about/story/zou"  element={<Zou/>} />
          <Route path="/about/story/whole_cake_island"  element={<WholeCakeIsland/>} />
          <Route path="/about/story/levely"  element={<Levely/>} />
          <Route path="/about/story/land_of_wano"  element={<LandOfWano/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
