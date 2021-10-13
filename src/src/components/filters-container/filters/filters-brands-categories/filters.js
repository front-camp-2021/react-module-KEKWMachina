import Checkbox from "../checkbox/checkbox";
import { cardsData } from "../../../../data";

function Filters(props) {

    return (
        <>
            <div className="filters__category">
                <h5 className="filters__section-header">{props.title}</h5>
                {
                    props.categoriesData.map(item => {
                        return <Checkbox checkboxName={item} handleChange={props.handleFiltersChange} title={props.title}/>
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