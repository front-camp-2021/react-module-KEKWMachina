function Searchfield(props) {

    return (
        <div className="searchfield">
            <input className="searchfield__input" placeholder="Search" onInput={props.onInputChange}></input>
        </div>
    )
}

export default Searchfield;