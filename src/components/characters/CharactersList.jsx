import CharactersCard from "./CharactersCard"
import { Link } from "react-router-dom"

function CharactersList({characters}) {

  
  //   
 
    const renderCharacters = characters.map((char) => {
           return <li className="list-item-style" key={char.id}>< Link className="link-style" to= {`/detail/${char.id}`}> <CharactersCard char={char}/> 
          </Link> </li> 
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
