
function FilterByGender({filterGender, filterOfGender}) {

    const handleRadio = (ev) => {
        filterOfGender (ev.target.value)
    }

  return (
    <div className="radio">
        <form>
       <label className="label-radio">
                Buscar por genero
            </label>
            <input   type="radio" name="gender" value="f" onChange={handleRadio} checked={filterGender === "f"} />
            <label className="radio-style" htmlFor=""> Mujer </label>
            
            <input   type="radio" name="gender" value="m" onChange={handleRadio} checked={filterGender === "m"} />
            <label className="radio-style" htmlFor=""> Hombre</label>
          
            </form>
    </div>
  )
}



export default FilterByGender
