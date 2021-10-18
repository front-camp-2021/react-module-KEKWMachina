/* eslint-disable jsx-a11y/anchor-is-valid */
function Pagination() {
  return (
    <div className="pagination">
      <button className="pagination__button-page-back"></button>
      <a href="#" className="pagination__page-outer-first">1</a>
      <div className="pagination__main">
        <a href="#" className="pagination__page">2</a>
        <a href="#" className="pagination__page">3</a>
        <a href="#" className="pagination__page">4</a>
        <a href="#" className="pagination__page active">5</a>
        <a href="#" className="pagination__page">6</a>
      </div>
      <a href="#" className="pagination__page-outer-last">7</a>
      <button className="pagination__button-page-forward"></button>
    </div>
  )
}

export default Pagination;