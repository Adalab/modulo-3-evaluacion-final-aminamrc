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
import FilterByGender from "./FilterByGender";


function App() {

const [characters, setCharacters] = useState ([]);
const [filterName, setFilterName] = useState ("");
const [filterHouse, setFilterHouse] = useState ("Gryffindor");
const [filterGender, setFilterGender] =useState ("");





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


const filterOfGender = (value)=> {
  setFilterGender(value)
}

const filteredCharacters = characters
.filter ((charName) => { 
  if (filterGender === "f") {
  return charName.gender === "female"
  } else if (filterGender === "m") {
  return charName.gender === "male"
  } else {
  return true;
  }})
  .filter((charName) => charName.name.toLowerCase().includes(filterName.toLowerCase()))
    if (filteredCharacters.length === 0) {
         return <p> Error </p> }
   

    

  return (  <>
  <div className="page">
   <Header/>
  <Routes>
      <Route path="/" element={
        <>
          
          <FilterByName filterOfName= {filterOfName} filterName= {filterName} />
          <FilterbyHouse filterOfHouse= {filterOfHouse} filterHouse= {filterHouse} />
          <FilterByGender filterOfGender={filterOfGender} filterGender= {filterGender}/>
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
