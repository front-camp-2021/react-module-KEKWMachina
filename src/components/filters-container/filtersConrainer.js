import Filters from "./filters/filters-brands-categories/filters";
import ResetButton from "./reset-button/resetButton";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrandsData } from "../../redux/brandsDataSlice";
import { getCategoriesData } from "../../redux/categoriesDataSlice";
import MultiRangeSlider from "./filters/filters-price/filtersPrice";

function FiltersContainer() {
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.categoriesData);
  const brandsData = useSelector((state) => state.brandsData);

  useEffect(() => {
    dispatch(getCategoriesData());
    dispatch(getBrandsData());
  }, [dispatch]);

  return (
    <div className="filters">
      <div className="filters__main">
        {categoriesData[categoriesData.length - 1] &&
        brandsData[brandsData.length - 1] ? (
          <>
            <MultiRangeSlider />
            <Filters
              title="Categories"
              categoriesData={categoriesData[categoriesData.length - 1]}
              hasLine={true}
            />
            <Filters
              title="Brands"
              categoriesData={brandsData[brandsData.length - 1]}
              hasLine={false}
            />
          </>
        ) : (
          ""
        )}
      </div>
      <ResetButton />
    </div>
  );
}

export default FiltersContainer;
