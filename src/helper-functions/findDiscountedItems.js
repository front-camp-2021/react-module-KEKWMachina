export function findDiscountedItems(cards) {
    return cards ? cards.filter(card => Boolean(card.discount)) : [];
}