import { Link, useParams } from "react-router-dom"


function DetailedCharacter({characters}) {

  const {id} = useParams()
  console.log (id)

  const idData = characters.find((char) => char.id === id);
  console.log (idData)
//quitar map
  // const renderCharacters = characters.map((char) => {
  //   return <li className="list-item-style" key={char.id}> {char} 
  //   </li> 
  // })
  return (  <>
    <div className="btn-style">
     <Link to="/" className="rtn-style"><p> 🠔 Volver </p>  </Link>
    </div>
    <div className="card-style-details">
      { idData.image === "" ? <img src =" https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"/> : <img src={idData.image}/>}
      <div className="text-container-details">
      <h3> {idData.name} </h3>
      <p> Species: {idData.species} </p>
      {idData.status ? <p> Status: Alive  ♡  </p> : <p> Status: Dead ☠︎︎  </p> }
      <p> Gender: {idData.gender} </p>
      <p> House: {idData.house} </p>
      </div> 
      </div>
      </>
    
   
  )
}

export default DetailedCharacter
