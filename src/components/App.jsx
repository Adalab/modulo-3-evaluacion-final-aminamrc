import { useEffect } from "react"
import "../scss/App.scss"
import getApi from "../services/getApi"
import { useState } from "react";
import CharactersList from "./characters/CharactersList";
import FilterByName from "./filters/FilterByName";
import FilterbyHouse from "./filters/FilterByHouse"
import Header from "./Header";

function App() {

const [characters, setCharacters] = useState ([]);
const [filterName, setFilterName] = useState ([]);
const [filterHouse, setFilterHouse] = useState ([]);


useEffect(() => {
  getApi().then((cleanData) => {
    setCharacters(cleanData)
  })
}, [])


  return ( 
  <div className="page">
  
  <Header/>
  <FilterByName />
  <FilterbyHouse/>
  <CharactersList characters= {characters} />
  
  </div>
  )
}

export default App
