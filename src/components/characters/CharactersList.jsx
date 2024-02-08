import CharactersCard from "./CharactersCard"


function CharactersList({characters}) {
 
    const renderCharacters = characters.map((char,i) => {
           return <li key={i}> <CharactersCard char={char}/> 
           </li> 
         })
    

  return (
    <>
    <h3> List of characters </h3>
    <ul>
        {renderCharacters}
    </ul>
      
      
    
    </>
  )
}

export default CharactersList
