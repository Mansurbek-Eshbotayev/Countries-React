

import Card from "../Card/Card";
import { Search, Select } from "../Search/Search";
import "./main.scss"
import {useContext, useEffect, useState} from 'react';
import { ThemeContext } from "../../context/ThemeContex";
// import { Route , Routes } from "react-router-dom";
// import { Single } from "../pages/Single/Single";

const Mains = () => {
  const {theme} = useContext(ThemeContext)
  const [todos, setTodus] = useState([])
  const [Loading, setLoading] = useState(true)
  const [isError, setisError] = useState(false)
  const [value, setValue] = useState("")
  const [select, setSelect] = useState("")
  const [second, setSecond] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => {
      setSecond(json)
      setLoading(false)
    })
  },[])

  
 useEffect(() => {
  if(value.length){
    fetch(`https://restcountries.com/v3.1/name/${value}`)
  .then(response => response.json())
  .then(json => {
    // setTodus(json)
    {json?.length ? setTodus(json) : setTodus(second)}
    setLoading(false)
  })
  .catch((err)=>{
    setisError(true)
    setLoading(false)
  })
  }else if(select.length){
    fetch(`https://restcountries.com/v3.1/region/${select}`)
    .then(response => response.json())
    .then(json => {
      setTodus(json)
      setLoading(false)
    })
    .catch((err)=>{
      setisError(true)
      setLoading(false)
    })
  }else{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => {
      setTodus(json)
      setLoading(false)
    })
    .catch((err)=>{
      setisError(true)
      setLoading(false)
    })
  }

 },[value,select])
 
  return(
    <main className={theme}>
    <section className="countries">
    <div className="container">
    <div className="country__inner">
    <Search setValue={setValue} />
    <Select setSelect={setSelect} />
    
    </div>
   {Loading && <h1>Loading..</h1>}
     {isError && <h1>error..</h1>}
     {todos.length !== 0 && (
      <ul className='card__list'>
        {
          todos.map(todo => (
            <div key={todo.name.common}>
              {
                <Card key={todo.population} img={todo.flags.png} name={todo.name.common} population={todo.population} region={todo.region} capital={todo.capital?.[0]}/>
              }
            </div>

          ))
        }
      </ul>
     )}
    </div>
    </section>
    </main>
    )
  }
  
  export default Mains;


 