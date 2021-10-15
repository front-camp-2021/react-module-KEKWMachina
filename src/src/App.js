import FiltersContainer from './components/filters-container/filtersConrainer';
import CardsContainer from './components/cards-container/searchfield/cardsContainer';
import Pagination from './components/pagination/pagination';
import Header from './components/header/header';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import MainContentNav from './components/main-content-nav/main-content-nav';
import { useDispatch, useSelector } from "react-redux";
import { cardsData } from './data';
import { filterData } from './components/filters-container/filters/filterLogic';
import { addCategory, removeCategory } from './redux/categoriesSlice';
import { addBrand, removeBrand} from './redux/brandsSlice'

function App() {
  const categoriesFilters = useSelector(state => state.categories);
  const brandsFilters = useSelector(state => state.brands);
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

  const cards = [...cardsData];

  let isFiltered = false;

  if(categoriesFilters.length > 0 || brandsFilters.length > 0) {
    isFiltered = true;
  }

  return (
      <div className="App">
        <Header />
        <Breadcrumbs />
        <MainContentNav />
        <div className="main-content">
          <FiltersContainer onCategoriesChange={handleCategoriesChange} onBrandsChange={handleBrandsChange} />
          <CardsContainer cardsData={filterData(cards, categoriesFilters, brandsFilters, cards)} isFiltered={isFiltered}/>
        </div>
        <Pagination />
      </div>
  );
}

export default App;
