import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContex";
import { useTranslation } from 'react-i18next';
import "./search.scss"

export const Search = ({setValue})=>{

  const {theme} = useContext(ThemeContext)
  const {t} = useTranslation()
  const getValue = (evt)=>{
  if(evt.code === "Enter"){
    setValue(evt.target.value);
    evt.target.value = ""
  }
  }

 
  return (
    <div className={theme}>
      <label className="search__label">
     <input onKeyUp={getValue} className="search__input" type="search" name="search_count" 
      placeholder={t("search.pla")}/>
    </label>
    </div>
  )
}

export const Select = ({setSelect}) => {
  const {t} = useTranslation()
  const selectVaue = (evt) => {
    setSelect(evt.target.value);
  }

  return(
    <select onChange={selectVaue} className="select" defaultValue={""}>
      <option disabled value="">{t("search.filter")}</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}