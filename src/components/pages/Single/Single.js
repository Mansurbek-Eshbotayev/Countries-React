import "./single.scss"
// import { Prev } from "../../../assets/Images/icons/Icons"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

export const Single = () => {
  const {name} = useParams()
  const [singl, setSingl] = useState([])
  const navigate = useNavigate()

 useEffect(() => {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then(response => response.json())
  .then(json => {
    setSingl(json)
  })
  
 },[name])

  return (
    <section className="single" >
      <div className="container">

        <button onClick={()=> navigate(-1)} className="single__button">
           Back
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
              <p className="info__text">Native Name: <span className="info__span">
                {item.name.nativeName[Object.keys(item.name.nativeName)[0]].common}
                </span></p>
              <p className="info__text">Population: <span className="info__span">
                {item.population}
                </span></p>
              <p className="info__text">Region: <span className="info__span">
                {item.region}
                </span></p>
              <p className="info__text">Sub Region: <span className="info__span">
              {item.subregion}
                </span></p>
             
            </div>
            <div className="col-5 ">
            <p className="info__text">Capital: <span className="info__span">
                {item.capital}
                </span></p>

            <p className="info__text">Top Level Domain: <span className="info__span">
                {item.tld}
                </span></p>
                <p className="info__text">Currencies: <span className="info__span">
                {item.currencies[Object.keys(item.currencies)].name}
                </span></p>
                <p className="info__text">Languages: <span className="info__span">
                {item.languages[Object.keys(item.languages)[0]]}
                </span></p>
            </div>
          </div>
          
          {
            item?.borders?.length && <div className="down mt-3">
            <span className="me-3">Border Countries:</span> {item.borders.map(e => (
              <button className="border__btn me-3">{e}</button>
            ))}
            </div>
          }
         </div>
        </div>
          )))
        }
      </div>
    </section>
  )
}
