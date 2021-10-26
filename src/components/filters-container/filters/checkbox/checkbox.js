
function Checkbox({title, checkboxName, handleChange}) {
    
    return (
        <>
            <div className="filters__checkbox" onChange={handleChange}>
                <input type="checkbox" id={title} name={checkboxName} className="filters__checkbox-square"></input>
                <label htmlFor="scales">{checkboxName}</label>
            </div>
        </>
    )
}

export default Checkbox;