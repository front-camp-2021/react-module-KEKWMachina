import Checkbox from "../checkbox/checkbox";
import { addCategory, removeCategory } from "../../../../redux/categoriesSlice";
import { addBrand, removeBrand } from "../../../../redux/brandsSlice";
import { useDispatch } from "react-redux";
import { setElements } from "../../../../redux/paginationSlice";

function Filters({title, categoriesData, hasLine}) {
  const dispatch = useDispatch();

  function handleCategoriesChange(event) {
    if (event.target.checked && event.target.type === "checkbox") {
      console.log('Added')
      dispatch(
        addCategory({
          category: event.target.name,
        })
      );
    } else if (!event.target.checked && event.target.type === "checkbox") {
      console.log('Removed')
      dispatch(
        removeCategory({
          category: event.target.name,
        })
      );
    }
    dispatch(
      setElements({
        indexesAndActivePage: [0, 9, 1]
      })
    );
  }

  function handleBrandsChange(event) {
    if (event.target.checked && event.target.type === "checkbox") {
      dispatch(
        addBrand({
          category: event.target.name,
        })
      );
    } else if (!event.target.checked && event.target.type === "checkbox"){
      dispatch(
        removeBrand({
          category: event.target.name,
        })
      );
    }
    dispatch(
      setElements({
        indexesAndActivePage: [0, 9, 1]
      })
    );
  }

  const changeHandler =
    title === "Brands" ? handleBrandsChange : handleCategoriesChange;

  const checkboxArr = categoriesData ? categoriesData : [];
  return (
    <>
      <div className="filters__category">
        <h5 className="filters__section-header">{title}</h5>
        {checkboxArr.map((item, index) => (
          <Checkbox
            checkboxName={item}
            handleChange={changeHandler}
            title={title}
            key={index}
          />
        ))}
      </div>
      {hasLine && <div className="filters_line"></div>}
    </>
  );
}

export default Filters;
