import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContex';
import { useTranslation } from 'react-i18next';
import './card.scss'


const Card = ({img,name,population,region,capital}) => {
  const {theme} = useContext(ThemeContext)
  const {t} =useTranslation()
  return(
    <li  className='card__item'>
    <div className={theme}>
    <Link className='card__link' to= {`/single/${name}`}>
    <div className='cover__img'>
    <img src={img} className=" card__img img-fluid" alt="..." />
    </div>
     <div className="card__body">
      <h5 className="card__title">{name}</h5>
      <p className='card__text'>{t("card.population")}<span className='card__span'> {population}</span></p>
      <p className='card__text'>{t("card.region")}<span className='card__span'> {region}</span></p>
      <p className='card__text'>{t("card.capital")}<span className='card__span'> {capital}</span></p>
     </div>
    </Link>
    </div>
    </li>
  )
}

export default Card;