import Checkbox from "../checkbox/checkbox";
import { addCategory, removeCategory } from "../../../../redux/categoriesSlice";
import { addBrand, removeBrand } from '../../../../redux/brandsSlice';
import { useDispatch } from "react-redux";

function Filters(props) {
    const dispatch = useDispatch();

    function handleCategoriesChange(event) {
        if (event.target.checked) {
            dispatch(
                addCategory({
                    category: event.target.name,
                })
            )
        } else {
            dispatch(
                removeCategory({
                    category: event.target.name,
                })
            )
        }
    }

    function handleBrandsChange(event) {
        if (event.target.checked) {
            dispatch(
                addBrand({
                    category: event.target.name,
                })
            )
        } else {
            dispatch(
                removeBrand({
                    category: event.target.name,
                })
            )
        }
    }

    const changeHandler = props.title === 'Brands' ?
    handleBrandsChange : handleCategoriesChange;

    let id = 0;
    return (
        <>
            <div className="filters__category">
                <h5 className="filters__section-header">{props.title}</h5>
                {
                    props.categoriesData.map(item => {
                        id++;
                        return <Checkbox checkboxName={item} handleChange={changeHandler} title={props.title} key={id} />
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