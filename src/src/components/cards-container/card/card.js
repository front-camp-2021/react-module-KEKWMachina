function Card(props) {
  return (
    <div className="merchandise-cards__card">
      <img src={props.img} className="merchandise-cards__image" alt="temp"></img>
      <div className="merchandise-cards__rating-and-price">
        <div className="merchandise-cards__rating">{props.rating}</div>
        <div className="merchandise-cards__price">₴{props.price}</div>
      </div>
      <ul className="merchandise-cards__item-descriptions">
        <li className="merchandise-cards__item-name">{props.title}</li>
        <li className="merchandise-cards__item-description">Redesigned from scratch and completely revised.</li>
      </ul>
      <div className="merchandise-cards__buttons">
        <button className="merchandise-cards__wishlist-button">WISHLIST</button>
        <button className="merchandise-cards__add-to-cart-button">ADD TO CART</button>
      </div>
    </div>
  )
}

export default Card