import { Link } from "react-router-dom";

function ItemPage({ card }) {
  return (
    <>
      {card ? (
        <>
          <Link to="/">
            <button className="wishlist-nav-container__wishlist-back-btn">
              Back to Purchases
            </button>
          </Link>
          <div className="item-container">
            <div className="item-container__image-container">
              <div className="item-container__image-container-wrapper">
                <img
                  className="item-container__image-container-image"
                  src={card.img}
                  alt={card.title}
                ></img>
              </div>
            </div>
            <div className="item-container__description">
              <ul className="item-container__description-stats">
                <li>Code: {card.id}</li>
                <li>Rating: {card.rating}</li>
                <li>Price: {card.price}</li>
              </ul>
              <p className="item-container__description-name">{card.title}</p>
              <button className="item-container__description-button">Buy</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to="/" className="item-page-back-link">
            <button className="wishlist-nav-container__wishlist-back-btn">
              Back to Purchases
            </button>
          </Link>
          <h1>No items here yet 🤷‍♂️</h1>
        </>
      )}
    </>
  );
}

export default ItemPage;
