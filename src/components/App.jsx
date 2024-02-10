import { useEffect } from "react"
import "../scss/App.scss"
import getApi from "../services/getApi"
import { useState } from "react";
import CharactersList from "./characters/CharactersList";
import FilterByName from "./filters/FilterByName";
import FilterbyHouse from "./filters/FilterByHouse"
import Header from "./Header";
import DetailedCharacter from "./details/DetailedCharacter";
import { Route, Routes } from "react-router-dom";

function App() {

const [characters, setCharacters] = useState ([]);
const [filterName, setFilterName] = useState ("");
const [filterHouse, setFilterHouse] = useState ("Gryffindor");



useEffect(() => {
  getApi(filterHouse).then((cleanData) => {
    setCharacters(cleanData)
  })
}, [filterHouse])


const filterOfName = (value)=> {
  setFilterName(value)
}

const filterOfHouse = (value)=> {
  setFilterHouse(value)
}


const filteredCharacters = characters
    .filter((charName) => charName.name.toLowerCase().includes(filterName))
    // if (filteredCharacters.length <= 0) {
    //   <p> Error </p>
    // } else {
    //   return filteredCharacters
    // })


    

  return (  <>
  <div className="page">
   <Header/>
  <Routes>
      <Route path="/" element={
        <>
          
          <FilterByName filterOfName= {filterOfName} />
          <FilterbyHouse filterOfHouse= {filterOfHouse}/>
          <CharactersList characters= {filteredCharacters} />
        </>
      } />
      <Route path="/detail/:id" element={<DetailedCharacter characters={characters}/>} />
    </Routes>
  
  
  
  </div>
  </>
  )
}

export default App
