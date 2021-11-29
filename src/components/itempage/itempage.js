import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function ItemPage() {
  const BACKEND_URL = "http://localhost:3001/";
  const products = new URL("products", BACKEND_URL);
  const cardsData = useSelector((state) => state.selectedProducts[0]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);

  useEffect(() => {
    getCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getCard() {
    if (cardsData) {
      setLoading(true);
      setCard(cardsData.find((card) => card.id === id));
      setLoading(false);
      return cardsData.find((card) => card.id === id);
    } else {
      setLoading(true);
      const response = await fetch(products);
      const data = await response.json();
      setCard(data.find((card) => card.id === id));
      setLoading(false);
      return data[0];
    }
  }

  return (
    <>
      {!loading && card ? (
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
                  src={card.images[0]}
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
              <button className="item-container__description-button">
                Buy
              </button>
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
          <h1 className="item-not-found-msg">Item not found</h1>
        </>
      )}
    </>
  );
}

export default ItemPage;
