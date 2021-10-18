import { Link } from "react-router-dom";

function ItemPage(props) {
    console.log(props.card)

    return (
        <>
            {
                props.card ?
                    <>
                        <Link to="/">
                            <button className="wishlist-nav-container__wishlist-back-btn">Back to Purchases</button>
                        </Link>
                        <div className='item-container'>
                            <div className="item-container__image-container">
                                <div className="item-container__image-wrapper">
                                    <img className="item-container__image" src={props.card.img} alt={props.card.title}></img>
                                </div>
                            </div>
                            <div className="item-container__description">
                                <ul className="item-container__description-stats">
                                    <li>Code: {props.card.id}</li>
                                    <li>Rating: {props.card.rating}</li>
                                    <li>Price: {props.card.price}</li>
                                </ul>
                                <p className="item-container__item-name">{props.card.title}</p>
                                <button className="item-container__buy-button">Buy</button>
                            </div>
                        </div>
                    </> :
                    <>
                        <Link to="/" className="item-page-back-link">
                            <button className="wishlist-nav-container__wishlist-back-btn">Back to Purchases</button>
                        </Link>
                        <h1>No items here yet 🤷‍♂️</h1>
                    </>
            }
        </>
    )
}

export default ItemPage;