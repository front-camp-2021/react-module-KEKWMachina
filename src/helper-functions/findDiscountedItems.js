export function findDiscountedItems(cards) {
    return cards.filter(card => Boolean(card.discount));
}