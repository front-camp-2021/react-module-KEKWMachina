import WishlistButton from "./wishlistbutton/wishlistButton";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../../redux/wishlistSlice";
import { Link } from "react-router-dom";
import { addDisplayedCard } from "../../../redux/itemPageSlice";

function Card(props) {
  const dispatch = useDispatch();
  const wishlistCards = useSelector(state => state.wishlist);
  const isInWishlist = wishlistCards.includes(props.id);

  function setWishlistItems(event) {
    let isInWishlist = false;

    wishlistCards.filter(item => {
      if (item === event.target.id) {
        isInWishlist = true;
      }
      return null;
    })

    if (isInWishlist) {
      dispatch(
        removeFromWishlist({
          item: event.target.id
        })
      )
    } else {
      dispatch(
        addToWishlist({
          item: event.target.id
        })
      )
    }
  }

  function setActiveItem() {
    dispatch(
      addDisplayedCard({
        card: props
      })
    )
  }

  return (
    <div className="merchandise-cards__card">
      <img src={props.img} className="merchandise-cards__image" alt={props.title}></img>
      <div className="merchandise-cards__rating-and-price">
        <div className="merchandise-cards__rating">{props.rating}</div>
        <div className="merchandise-cards__price">₴{props.price}</div>
      </div>
      <ul className="merchandise-cards__item-descriptions">
        <Link to={`/:id${props.id}`} className='merchandise-cards__item-page-link'>
          <li className="merchandise-cards__item-name" onPointerDown={setActiveItem}>{props.title}</li>
        </Link>
        <li className="merchandise-cards__item-description">Redesigned from scratch and completely revised.</li>
      </ul>
      <div className="merchandise-cards__buttons">
        <WishlistButton setWishlistItems={setWishlistItems} id={props.id} isInWishlist={isInWishlist} displayed={props.displayed} />
        <button className="merchandise-cards__add-to-cart-button">ADD TO CART</button>
      </div>
    </div>
  )
}

export default Card