
function Checkbox(props) {

    return (
        <>
            <div className="filters__checkbox" onChange={props.handleChange}>
                <input type="checkbox" id={props.title} name={props.checkboxName} className="filters__checkbox-square"></input>
                <label htmlFor="scales">{props.checkboxName}</label>
            </div>
        </>
    )
}

export default Checkbox;