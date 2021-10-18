
import Filters from "./filters/filters-brands-categories/filters";
import ResetButton from "./reset-button/resetButton";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoriesData } from "../../redux/categoriesDataSlice";
import { setBrandsData } from "../../redux/brandsDataSlice";

function FiltersContainer() {
  const dispatch = useDispatch();
  const categoriesData = useSelector(state => state.categoriesData);
  const brandsData = useSelector(state => state.brandsData);

  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then(res => {
        dispatch(
          setCategoriesData({
            categoriesData: res.data
          })
        )
      })
    axios.get('http://localhost:3001/brands')
      .then(res => {
        dispatch(
          setBrandsData({
            brandsData: res.data
          })
        )
      })
    
  }, [dispatch]);

  console.log("DATA", categoriesData, brandsData)

  return (
    <div className="filters">
      <div className="filters__main">
        <Filters title="Categories" categoriesData={categoriesData[categoriesData.length - 1]} hasLine={true}/>
        <Filters title="Brands" categoriesData={brandsData[brandsData.length - 1]} hasLine={false}/>
      </div>
      <ResetButton />
    </div>
  )
}


export default FiltersContainer;