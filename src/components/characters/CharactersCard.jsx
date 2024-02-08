

function CharactersCard({characters}) {


  return (
    <>
    <div>
      <h6> Characters Card </h6>
      <img src={characters.image}/> img
      <p> {characters.name} name </p>
      <p> {characters.species} species </p>
      </div>
    </>
  )
}

export default CharactersCard
