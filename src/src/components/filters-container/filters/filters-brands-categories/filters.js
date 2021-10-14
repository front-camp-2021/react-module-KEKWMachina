import Checkbox from "../checkbox/checkbox";

function Filters(props) {
    let id = 0;

    return (
        <>
            <div className="filters__category">
                <h5 className="filters__section-header">{props.title}</h5>
                {
                    props.categoriesData.map(item => {
                        id++;
                        return <Checkbox checkboxName={item} handleChange={props.handleFiltersChange} title={props.title} key={id}/>
                    })
                }
            </div>
                {
                    props.hasLine ? <div className="filters_line"></div> : ""
                }
        </>
    )
}

export default Filters;