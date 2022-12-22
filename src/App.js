// import { useRef, useState } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Mains from "./components/Main/Mains";
import { Route , Routes } from "react-router-dom";
import { Single } from "./components/pages/Single/Single";
import { Error } from "./components/pages/Error/Error";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { lang } from './lang/Lang';

function App() {

  i18n
  
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("lang")|| 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {translation: lang.en},
      uz: {translation: lang.uz},
      ru: {translation: lang.ru},
    }
  });

  return (
    <div className="App">
     <Header  />
     <Routes>
     <Route path="/" element={<Mains  />} />
      <Route path="/single/:name" element={<Single/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </div>
  );
}

export default App;
