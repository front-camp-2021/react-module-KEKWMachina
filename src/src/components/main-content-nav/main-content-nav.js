function MainContentNav() {
    return (
        <div className="main-content-nav">
        <div className="filters-header">
          <div className="filters-header__nav">
            <div className="filters-header__marker">Filters</div>
            <button className="filters-header__filters-hide-button"></button>
          </div>
        </div>
        <div className="search-resluts">
          <div className="search-resluts__number">7588 Results Found</div>
          <button className="search-resluts__wishlist-button"></button>
        </div>
      </div>
    )
}

export default MainContentNav;