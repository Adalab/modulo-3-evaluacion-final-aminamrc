import { useEffect } from "react"
import "../scss/App.scss"
import getApi from "../services/getApi"
import { useState } from "react";
import CharactersList from "./characters/CharactersList";

function App() {

const [characters, setCharacters] = useState ([]);

useEffect(() => {
  getApi().then((cleanData) => {
    setCharacters(cleanData)
  })
}, [])


  return ( 
  <>
  
  <h1> Harry Potter </h1>

  <CharactersList characters= {characters} />
  </>
  )
}

export default App
