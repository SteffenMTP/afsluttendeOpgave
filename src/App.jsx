import React from 'react';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './Layout/Navbar';
import NoMatch from './pages/NoMatch';

import Home from './pages/Home';

import News from './pages/NewsAPI/News';

import Weather from './pages/OpenWeather/Weather';

import Viborghaveservice1 from './pages/ViborgHaveservice/Viborghaveservice1';
import Viborghaveservice2 from './pages/ViborgHaveservice/Viborghaveservice2';
import ViborghaveserviceAdmin from './pages/ViborgHaveservice/ViborghaveserviceAdmin';

import Energidata from './pages/Energidata/Energidata';

import Quotes from './pages/SelvvalgtAPI/Quotes';


function App() {
  return (

    <Router>
      <Navbar/>

      <section>

        <Routes>
          <Route path="/" element={< Home />} />

          <Route path="/News" element={<News/>}/>

          <Route path="/Weather" element={<Weather/>}/>

          <Route path="/viborghaveservice1" element={<Viborghaveservice1/>}/>
          <Route path="/viborghaveserviceAdmin" element={<ViborghaveserviceAdmin/>}/>
          <Route path="/viborghaveservice2" element={<Viborghaveservice2/>}/>

          <Route path="/Energidata" element={<Energidata/>}/>
          
          <Route path="/Quotes" element={<Quotes/>}/>

          <Route path="*" element={<NoMatch/>}/> 

        </Routes>

      </section>

    </Router>


  );
}

export default App;
