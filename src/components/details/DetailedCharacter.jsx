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
      { idData.image === "" ? <img src =" https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"/> : <img src={idData.image}/>}
      <div className="text-container-details">
      <p> {idData.name} </p>
      <p> {idData.species} </p>
      {idData.status ? <p> Alive  ♡  </p> : <p> Dead ☠︎︎  </p> }
      <p> {idData.gender}</p>
      </div> 
      </div>
    
   
  )
}

export default DetailedCharacter
