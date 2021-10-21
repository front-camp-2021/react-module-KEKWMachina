export function findMinMax(cardsArr) {

  if (cardsArr.length === 0) {
    return;
  }

  const copy = JSON.parse(JSON.stringify(cardsArr));

  copy.sort((a, b) => {
    return a.price - b.price
  })


  return [
    copy[0].price,
    copy[copy.length - 1].price
  ]
}