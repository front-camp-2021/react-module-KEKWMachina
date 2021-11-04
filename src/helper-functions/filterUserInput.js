export function filterUserInput(userInput, cardData) {
    return cardData.filter((cardData) =>
    cardData.title
      .toLowerCase()
      .includes(userInput.toLowerCase())
  )
}