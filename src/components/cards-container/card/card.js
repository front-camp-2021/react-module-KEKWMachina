import WishlistButton from "./wishlistbutton/wishlistButton";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/wishlistSlice";
import { Link } from "react-router-dom";
import { addDisplayedCard } from "../../../redux/itemPageSlice";
import resetFilters from "../../../helper-functions/resetFilters";
import { clearPriceRange } from "../../../redux/minAndMaxPriceSlice";
import { clearBrands } from "../../../redux/brandsSlice";
import { clearCategories } from "../../../redux/categoriesSlice";
import { clearSearchValue } from "../../../redux/searchInputSlice";
import { filterData } from "../../../redux/cardDataSlice";

function Card({ img, id, rating, title, price, displayed, discount }) {
  const dispatch = useDispatch();
  const wishlistCards = useSelector((state) => state.wishlist);
  const isInWishlist = wishlistCards.includes(id);
  const cardsData = useSelector((state) => state.cardsData);

  function setWishlistItems(event) {
    let isInWishlist = false;

    wishlistCards.filter((item) => {
      if (item === event.target.id) {
        isInWishlist = true;
      }
      return null;
    });

    if (isInWishlist) {
      dispatch(
        removeFromWishlist({
          item: event.target.id,
        })
      );
    } else {
      dispatch(
        addToWishlist({
          item: event.target.id,
        })
      );
    }
  }

  function reset() {
    resetFilters(
      dispatch,
      cardsData,
      clearBrands,
      clearCategories,
      clearPriceRange,
      clearSearchValue,
      filterData
    );
  }
  function setActiveItem() {
    dispatch(
      addDisplayedCard({
        card: {
          id: id,
          img: img,
          rating: rating,
          price: price,
          title: title,
        },
      })
    );
  }

  return (
    <div className="merchandise-cards__card">
      <img src={img} className="merchandise-cards__image" alt={title}></img>
      <div className="merchandise-cards__rating-and-price">
        <div className="merchandise-cards__rating">{rating}</div>
        {discount ? (
          <div className="merchandise-cards__price">
            ₴{Math.ceil(price - (price / 100) * discount)} /{" "}
            <del>{price}</del>
          </div>
        ) : (
          <div className="merchandise-cards__price">₴{price}</div>
        )}
      </div>
      <ul className="merchandise-cards__item-descriptions">
        <Link to={`/product-${id}`} className="merchandise-cards__item-page-link">
          <li
            className="merchandise-cards__item-name"
            onClick={reset}
            onPointerDown={setActiveItem}
          >
            {title.slice(0, 40)}...
          </li>
        </Link>
        <li className="merchandise-cards__item-description">
          Redesigned from scratch and completely revised.
        </li>
      </ul>
      <div className="merchandise-cards__buttons">
        <WishlistButton
          setWishlistItems={setWishlistItems}
          id={id}
          isInWishlist={isInWishlist}
          displayed={displayed}
        />
        <button className="merchandise-cards__add-to-cart-button">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  id: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  displayed: PropTypes.bool,
  discount: PropTypes.number
}

export default Card;
