function Checkbox({title, checkboxName, handleChange}) {
    
    return (
        <>
            <div className="filters__checkbox" onClick={handleChange}>
                <input type="checkbox" id={checkboxName} name={checkboxName} className="filters__checkbox-square"></input>
                <label htmlFor={checkboxName} className="filters__checkbox-label">{checkboxName}</label>
            </div>
        </>
    )
}

export default Checkbox;