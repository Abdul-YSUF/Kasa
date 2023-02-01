import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Logement from './pages/Logement';
import {data} from './logement/fiche'
import Erreur from './pages/Erreur';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Accueil/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/logement/:id" render={(props) => (
                <Logement {...props} logement={data} />
                )}/>
    <Route path="/*" element={<Erreur/>} />
   </Routes>
   </BrowserRouter>
  );
};

export default App;