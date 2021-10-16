export function filterWishlistItems(wishlistIDs, cardsData) {
    const result = [];

    for (const card of cardsData) {
        for (const id of wishlistIDs) {
            if (card.id === id) {
                result.push(card)
            }
        }
    }

    return result;
}
