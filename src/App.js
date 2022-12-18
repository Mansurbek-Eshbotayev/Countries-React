// import { useRef, useState } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Mains from "./components/Main/Mains";
import { Route , Routes } from "react-router-dom";
import { Single } from "./components/pages/Single/Single";

function App() {

  return (
    <div className="App">
     <Header />
     <Routes>
     <Route path="/" element={<Mains />} />
      <Route path="/single/:name" element={<Single/>} />
    </Routes>
    </div>
  );
}

export default App;
