import React from "react";
import { connect } from "react-redux";
import { Card, Header, Icon, Button, Divider } from "semantic-ui-react";
import { changeFavoriteStatus } from "../../features/books/actions/actions";

function BookCard2({ card, changeStatus }) {
  return (
    <Card style={{ padding: "10px", marginRight: "25px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header>
          {card.title}
          {card.isFavorite ? <Icon name="star" /> : null}
        </Header>
        by {card.author}
      </div>
      <Divider />
      <span style={{ marginBottom: "10px" }}>{card.description}</span>
      <Button
        content={`${card.isFavorite ? "Remove from" : "Add to"} favorites`}
        color={card.isFavorite ? "orange" : "twitter"}
        icon="book"
        onClick={() => changeStatus(card.id)}
      />
    </Card>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    changeStatus: (id) => dispatch(changeFavoriteStatus(id)),
  };
}

export default connect(null, mapDispatchToProps)(BookCard2);
