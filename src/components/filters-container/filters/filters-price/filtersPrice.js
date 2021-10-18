function FiltersPrice() {
  return (
    <>
      <div className="filters__price-range">
        <h5 className="filters__section-header">Multi Range</h5>
        <div className="filters__checkbox">
          <input type="checkbox" id="Range" name="$10" className="filters__checkbox-square"></input>
          <label htmlFor="scales">$10</label>
        </div>
        <div className="filters__checkbox">
          <input type="checkbox" id="Range" name="$10-$100" className="filters__checkbox-square"></input>
          <label htmlFor="scales">$10-$100</label>
        </div>
        <div className="filters__checkbox">
          <input type="checkbox" id="Range" name="$100-$500" className="filters__checkbox-square"></input>
          <label htmlFor="scales">$100-$500</label>
        </div>
        <div className="filters__checkbox">
          <input type="checkbox" id="Range" name="$500" className="filters__checkbox-square"></input>
          <label htmlFor="scales">$500</label>
        </div>
        <div className="filters__checkbox">
          <input type="checkbox" id="Range" name="All" className="filters__checkbox-square"></input>
          <label htmlFor="scales">All</label>
        </div>
      </div>
      <div className="filters_line"></div>
    </>
  )
}


export default FiltersPrice