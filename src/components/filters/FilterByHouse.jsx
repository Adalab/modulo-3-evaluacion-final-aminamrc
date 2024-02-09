

function FilterByHouse({filterOfHouse}) {

  const handleInput = (ev) => {
    filterOfHouse(ev.target.value)
  }

  return (
    <div className="filter-style">
      <label className="filter-text-style"> Buscar por casa </label>
        <select name="" id=""onChange={handleInput}>
        <option value="All"> All </option>
        <option value="Gryffindor"> Gryffindor </option>
        <option value="Ravenclaw"> Ravenclaw </option>
        <option value="Slytherin"> Slytherin </option>
        <option value="Hufflepuff"> Hufflepuff </option>
        </select>
    </div>
  )
}

export default FilterByHouse
