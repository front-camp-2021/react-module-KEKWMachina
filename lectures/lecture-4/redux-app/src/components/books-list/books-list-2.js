import { connect } from "react-redux";
import BookCard2 from "../book-card/book-card-2";
import { Button, Grid, Header } from "semantic-ui-react";
import { resetAll } from "../../features/books/actions/actions";
import React from "react";

class BooksList2 extends React.Component {
  render() {
    return (
      <>
        <Header textAlign="center" size="large">
          Example of using `mapStateToProps` and `mapDispatchToProps`
        </Header>
        <Grid>
          {this.props.books?.length ? (
            this.props.books.map((card) => (
              <BookCard2 key={card.id} card={card} />
            ))
          ) : (
            <Header>No title to display</Header>
          )}
        </Grid>
        <h3>Total favorites: {this.props.favoriesCount}</h3>
        <Button onClick={this.props.resetAll}>Reset all favorites</Button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    favoriesCount: state.books.filter((book) => book.isFavorite).length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { resetAll: () => dispatch(resetAll()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList2);
