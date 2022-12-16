import "./search.scss"

export const Search = ({setValue})=>{
  const getValue = (evt)=>{
  if(evt.code === "Enter"){
    setValue(evt.target.value);
  }
  }

 
  return (
    <label className="search__label">
     <input onKeyUp={getValue} className="search__input" type="search" name="search_count"  placeholder="Search for a country…"/>
    </label>
  )
}

export const Select = ({setSelect}) => {

  const selectVaue = (evt) => {
    setSelect(evt.target.value);
  }

  return(
    <select onChange={selectVaue} className="select" defaultValue={""}>
      <option disabled value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}