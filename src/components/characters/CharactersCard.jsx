

function CharactersCard({char}) {


  return (
    <>
    <div>
      <img src={char.image}/> 
      <p> {char.name}  </p>
      <p> {char.species} </p>
      </div>
    </>
  )
}

export default CharactersCard
