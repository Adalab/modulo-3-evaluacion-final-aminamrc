

function CharactersCard({char}) {


  return (
    
    <div className="card-style">
      <img src={char.image}/>
      <div className="text-container">
      <p> {char.name}  </p>
      <p> {char.species} </p>
      </div> 
      </div>
    
  )
}

export default CharactersCard
