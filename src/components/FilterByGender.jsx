

function FilterByGender({filterGender, filterOfGender}) {

    const handleRadio = (ev) => {
        filterOfGender (ev.target.value)
    }

  return (
    <div className="radio-style">
        <form>
       <label>
                Buscar por genero
            </label>
            <input type="radio" name="gender" value="f" onChange={handleRadio} checked={filterGender === "f"} />
            <label htmlFor=""> Female</label>
            <input type="radio" name="gender" value="m" onChange={handleRadio} checked={filterGender === "m"} />
            <label htmlFor=""> Male</label>
            </form>
    </div>
  )
}

export default FilterByGender
