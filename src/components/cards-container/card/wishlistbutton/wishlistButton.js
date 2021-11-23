import PropTypes from "prop-types";

function WishlistButton({ id, isInWishlist, setWishlistItems, displayed }) {
  let buttonText;
  if (isInWishlist && displayed) {
    buttonText = "REMOVE";
  } else if (isInWishlist) {
    buttonText = "ADDED";
  } else {
    buttonText = "WISHLIST";
  }

  return (
    <button
      className="merchandise-cards__wishlist-button"
      onPointerDown={setWishlistItems}
      data-added="true"
      id={id}
    >
      {buttonText}
    </button>
  );
}

WishlistButton.propTypes = {
  id: PropTypes.string,
  isInWishlist: PropTypes.bool,
  setWishlistItems: PropTypes.func,
  displayed: PropTypes.bool,
};

export default WishlistButton;
