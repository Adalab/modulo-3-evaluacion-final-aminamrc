import CharactersCard from "./CharactersCard"


function CharactersList({characters}) {
 
    const renderCharacters = characters.map((char,i) => {
           return <li className="list-item-style" key={i}> <CharactersCard char={char}/> 
           </li> 
         })
    

  return (
    <div className="list-style">
    <ul>
        {renderCharacters}
    </ul>
      
      
    
    </div>
  )
}

export default CharactersList
