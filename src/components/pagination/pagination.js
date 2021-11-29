import { useDispatch, useSelector } from "react-redux";
import {
  setElements,
  setPageBack,
  setPageForward,
} from "../../redux/paginationSlice";

function Pagination({ cardsData }) {
  const dispatch = useDispatch();
  const elementsIndexes = useSelector((state) => state.paginationElements)[
    useSelector((state) => state.paginationElements).length - 1
  ];
  const pagesTotal = [...Array(Math.ceil(cardsData.length / 9)).keys()];

  function changePage(event) {
    dispatch(
      setElements({
        indexesAndActivePage: [
          (event.target.textContent - 1) * 9,
          event.target.textContent * 9,
          Number(event.target.textContent),
        ],
      })
    );
  }

  function pageBack() {
    dispatch(
      setPageBack({
        pageBackIndexes: [
          elementsIndexes[0] - 9,
          elementsIndexes[1] - 9,
          elementsIndexes[2] - 1,
        ],
      })
    );
  }

  function pageForward() {
    dispatch(
      setPageForward({
        pageForwardIndexes: [
          elementsIndexes[0] + 9,
          elementsIndexes[1] + 9,
          elementsIndexes[2] + 1,
        ],
      })
    );
  }

  return (
    <div className="pagination">
      {elementsIndexes[2] === 1 ? (
        ""
      ) : (
        <button
          className="pagination__button-page-back"
          onPointerDown={pageBack}
        ></button>
      )}
      <div className="pagination__main">
        {pagesTotal.map((page) => {
          if (page + 1 === elementsIndexes[2]) {
            return (
              <button
                key={page}
                onPointerDown={changePage}
                className="pagination__page active"
              >
                {page + 1}
              </button>
            );
          } else {
            return (
              <button
                key={page}
                onPointerDown={changePage}
                className="pagination__page"
              >
                {page + 1}
              </button>
            );
          }
        })}
      </div>
      {elementsIndexes[2] === pagesTotal.length ? (
        ""
      ) : (
        <button
          className="pagination__button-page-forward"
          onPointerDown={pageForward}
        ></button>
      )}
    </div>
  );
}

export default Pagination;
