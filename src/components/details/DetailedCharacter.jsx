
function DetailedCharacter({filteredCharacters}) {

  const renderCharacters = filteredCharacters.map((char,i) => {
    return <li className="list-item-style" key={i}> {char} 
    </li> 
  })
  return (
    <div>
      <h6> Details </h6>
      <div className="card-style">
      <img src={renderCharacters.image}/>
      <div className="text-container">
      <p> {renderCharacters.name}  </p>
      <p> {renderCharacters.species} </p>
      </div> 
      </div>
    
    </div>
  )
}

export default DetailedCharacter
