// import { useEffect, useState } from "react";
import { useContext, } from "react";
import { ThemeContext } from "../../context/ThemeContex";
import { useTranslation } from 'react-i18next';
import "./header.scss"
const Header = () =>{
  
  const {theme,setTheme} = useContext(ThemeContext)

  const {t,i18n} = useTranslation()
  return(
    <header className={theme}>
      <div className="container">
        <div className="header__inner">
        <h1 className="headwer__title m-0">{t("header.logo")}</h1>
        <div className="d-flex">
        <select onChange={(evt) => {
          localStorage.setItem("lang",evt.target.value)
          i18n.changeLanguage(evt.target.value)}} className="heder__select me-3" 
        defaultValue={i18n.language}>
          <option value="en">En</option>
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
        </select>

        <button onClick={()=> { 
          setTheme(theme === "light" ? "dark" : "light")}}
           className="header__btn ">{theme} {t("header.mode")}</button>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header;