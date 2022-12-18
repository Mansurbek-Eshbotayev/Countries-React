import { Link } from 'react-router-dom';
import './card.scss'


const Card = ({img,name,population,region,capital}) => {
  return(
    <li className='card__item'>
    <Link className='card__link' to= {`/single/${name}`}>
    <div className='cover__img'>
    <img src={img} className=" card__img img-fluid" alt="..." />
    </div>
     <div className="card__body">
      <h5 className="card__title">{name}</h5>
      <p className='card__text'>Population:<span className='card__span'> {population}</span></p>
      <p className='card__text'>Region:<span className='card__span'> {region}</span></p>
      <p className='card__text'>Capital:<span className='card__span'> {capital}</span></p>
     </div>
    </Link>
    </li>
  )
}

export default Card;