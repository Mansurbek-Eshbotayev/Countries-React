import "./single.scss"
// import { Prev } from "../../../assets/Images/icons/Icons"

import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContex";
import { useTranslation } from 'react-i18next';

export const Single = () => {
  const {name} = useParams()
  const [singl, setSingl] = useState([])
  const navigate = useNavigate()
  const {theme} = useContext(ThemeContext)
  const {t} =useTranslation()

 useEffect(() => {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then(response => response.json())
  .then(json => {
    setSingl(json)
  })
  .catch(err => console.log("error"))
  
 },[name])

  return (
   <section className={theme}>
     <div className="single" >
      <div className="container">

        <button onClick={()=> navigate(-1)} className="single__button">
           {t("single.btn")}
        </button>
        {
          singl.length !==0 && singl.map((item => (
            <div key={item.name.common} className="single__wrap d-flex">
         <div className="wrap__img ">
          <img className="info__img" src={item.flags.svg} alt="flag" />
         </div>
         <div className="wrap__info w-100 pt-1">
          <h3 className="info__title">
            {item.name.common}
          </h3>
          <div key={item.name.common} className="row">
            <div className="col-6">
              <p className="info__text">{t("single.native")} <span className="info__span">
                {item.name.nativeName[Object.keys(item.name.nativeName)[0]].common}
                </span></p>
              <p className="info__text">{t("single.population")} <span className="info__span">
                {item.population}
                </span></p>
              <p className="info__text">{t("single.region")} <span className="info__span">
                {item.region}
                </span></p>
              <p className="info__text">{t("single.sub")} <span className="info__span">
              {item.subregion}
                </span></p>
             
            </div>
            <div className="col-5 ">
            <p className="info__text">{t("single.capitel")} <span className="info__span">
                {item.capital}
                </span></p>

            <p className="info__text">{t("single.domain")} <span className="info__span">
                {item.tld}
                </span></p>
                <p className="info__text">{t("single.currencies")} <span className="info__span">
                {item.currencies[Object.keys(item.currencies)].name}
                </span></p>
                <p className="info__text">{t("single.languages")} <span className="info__span">
                {item.languages[Object.keys(item.languages)[0]]}
                </span></p>
            </div>
          </div>
          
          {
            item?.borders?.length && <div className="down mt-3">
            <span className="me-3">{t("single.border")}</span> {item.borders.map(e => (
              <button className="border__btn me-3">{e}</button>
            ))}
            </div>
          }
         </div>
        </div>
          )))
        }
      </div>
    </div>
   </section>
  )
}
