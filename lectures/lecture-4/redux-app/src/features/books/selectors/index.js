export const selectBooks = (state) => state.books;

export const selectFavoriteBooksCount = (state) =>
  state.books.filter((item) => item.isFavorite).length;
