

function FilterByName( {filterOfName}) {

  const handleInput = (ev) => {
    filterOfName(ev.target.value)
  }

  return (
    <div className="filter-style">
      <label className="filter-text-style"> Buscar por nombre  </label>
      <input type="text" name="" id="" className="filter-square-style" onChange={handleInput}/>
     
    </div>
  )
}

export default FilterByName
