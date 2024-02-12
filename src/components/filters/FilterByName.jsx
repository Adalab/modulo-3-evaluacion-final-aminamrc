

function FilterByName( {filterOfName, filterName}) {

  const handleInput = (ev) => {
    filterOfName(ev.target.value)
  }

  return (
    <div className="filter-style">
      <form>
      <label className="filter-text-style"> Buscar por nombre  </label>
      <input type="text" name="name" id="name" value={filterName} className="filter-square-style" onChange={handleInput}/>
     </form>
    </div>
  )
}

export default FilterByName
