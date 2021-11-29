import { Link } from "react-router-dom";
import Card from "../cards-container/card/card";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Wishlist() {
  const { selectedProducts } = useSelector((state) => state);

  return (
    <>
      <div className="wishlist-nav-container">
        <Link to="/">
          <button className="wishlist-nav-container__wishlist-back-btn">
            Back to Purchases
          </button>
        </Link>
      </div>

      <div className="wishlist-cards-wrapper">
        <div className="wishlist-cards-wrapper__container">
          {selectedProducts[0].length > 0 ? (
            selectedProducts[selectedProducts.length - 1]
              .filter((product) => Boolean(product.isFavourite))
              .map((filteredData) => {
                return (
                  <Card
                    key={filteredData.id}
                    id={filteredData.id}
                    img={filteredData.images[0]}
                    rating={filteredData.rating}
                    price={filteredData.price}
                    title={filteredData.title}
                    discount={filteredData.discount}
                    isFavourite={filteredData.isFavourite}
                  />
                );
              })
          ) : (
            <h1 className="wishlist-cards-wrapper__message">
              No items were added yet
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

Wishlist.propTypes = {
  cards: PropTypes.array,
};

export default Wishlist;
