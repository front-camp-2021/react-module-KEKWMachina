import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "../book-card/book-card";
import {
  selectBooks,
  selectFavoriteBooksCount,
} from "../../features/books/selectors/index";
import { Button, Grid, Header } from "semantic-ui-react";
import { RESET_ALL_STATUS } from "../../features/books/actions/actions";

export default function BooksList() {
  const books = useSelector(selectBooks);
  const favoriesCount = useSelector(selectFavoriteBooksCount);
  const dispatch = useDispatch();

  return (
    <>
      <Header textAlign="center" size="large">
        Example of using `useSelector` and `useDispatch`
      </Header>
      <Grid>
        {books?.length ? (
          books.map((item) => <BookCard key={item.id} card={item} />)
        ) : (
          <Header>No title to display</Header>
        )}
      </Grid>
      <h3>Total favorites: {favoriesCount}</h3>
      <Button onClick={() => dispatch({ type: RESET_ALL_STATUS })}>
        Reset all favorites
      </Button>
    </>
  );
}
