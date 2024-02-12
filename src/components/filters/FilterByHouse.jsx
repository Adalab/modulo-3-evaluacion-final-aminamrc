

function FilterByHouse({filterOfHouse, filterHouse }) {

  const handleInput = (ev) => {
    filterOfHouse(ev.target.value)
  }

  return (
    <div className="filter-style">
      <form> 
      <label className="filter-text-style"> Buscar por casa </label>
        <select name="house" id="house" value= {filterHouse} onChange={handleInput} className="select-box">
        {/* <option value="All"> All </option> */}
        <option value="Gryffindor"> Gryffindor </option>
        <option value="Ravenclaw"> Ravenclaw </option>
        <option value="Slytherin"> Slytherin </option>
        <option value="Hufflepuff"> Hufflepuff </option>
        </select>
        </form>
    </div>
  )
}

export default FilterByHouse
