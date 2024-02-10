

function CharactersCard({char}) {

  const ImgReplacement= " https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
 
  return (
    
    <div className="card-style">
       {/* <img src={char.image}/>  */}
      { char.image === "" ? <img src =" https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"/> : <img src={char.image}/>}
      <div className="text-container">
      <p> {char.name}  </p>
      <p> {char.species} </p>
      </div> 
      </div>
    
  )
}

export default CharactersCard
