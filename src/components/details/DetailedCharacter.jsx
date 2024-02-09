import { useParams } from "react-router-dom"


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
  return (
    <div className="card-style-details">
      <img src={idData.image} />
      <div className="text-container-details">
      <p> {idData.name} </p>
      <p> {idData.species} </p>
      <p> {idData.status }  ♥  </p>
      <p> {idData.gender}</p>
      </div> 
      </div>
    
   
  )
}

export default DetailedCharacter
