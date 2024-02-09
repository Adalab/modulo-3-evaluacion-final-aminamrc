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
const [filterName, setFilterName] = useState ("");
const [filterHouse, setFilterHouse] = useState ("");

const filterOfName = (value)=> {
  setFilterName(value)
}

const filterOfHouse = (value)=> {
  setFilterHouse(value)
}


const filteredCharacters = characters
    .filter((charName) => charName.name.toLowerCase().includes(filterName)) 
    .filter((charHouse) => {
      if (filterHouse === "All" || filterHouse === "" ) {
        return true;
      } else {
      return charHouse.house === filterHouse}
    })








useEffect(() => {
  getApi().then((cleanData) => {
    setCharacters(cleanData)
  })
}, [])


  return ( 
  <div className="page">
  
  <Header/>
  <FilterByName filterOfName= {filterOfName} />
  <FilterbyHouse filterOfHouse= {filterOfHouse}/>
  <CharactersList characters= {filteredCharacters} />
  
  </div>
  )
}

export default App
