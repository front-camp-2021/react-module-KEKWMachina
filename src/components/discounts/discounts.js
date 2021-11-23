import { Link } from "react-router-dom";
import Card from "../cards-container/card/card";
import PropTypes from "prop-types";

function Discounts({ cards }) {
  let cardsData = cards;

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
          {cardsData.length > 0 ? (
            cardsData.map((cardData) => {
              return (
                <Card
                  key={cardData.id}
                  id={cardData.id}
                  img={cardData.images[0]}
                  rating={cardData.rating}
                  price={cardData.price}
                  title={cardData.title}
                  displayed={true}
                  discount={cardData.discount}
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

Discounts.propTypes = {
  cards: PropTypes.array
}

export default Discounts;
