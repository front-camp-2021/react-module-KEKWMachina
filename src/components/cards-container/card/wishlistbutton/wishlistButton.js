function WishlistButton(props) {
    let buttonText;
    if(props.isInWishlist && props.displayed) {
        buttonText = 'REMOVE';
    } else if (props.isInWishlist) {
        buttonText = 'ADDED';
    } else {
        buttonText = 'WISHLIST';
    }

    return (
        <button 
        className="merchandise-cards__wishlist-button" 
        onPointerDown={props.setWishlistItems} 
        data-added='true' 
        id={props.id}>
        {
            buttonText
        }
        </button>
    )
}

export default WishlistButton;