import CharactersCard from "./CharactersCard"


function CharactersList({characters}) {
  //  <Link to={`/detail/${char.id}`}> 
  // <DetailedCharacter filteredCharacters={filteredCharactersf} />
  // </Link>
 
 
    const renderCharacters = characters.map((char,i) => {
           return <li className="list-item-style" key={char.id}> <CharactersCard char={char}/> 
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
