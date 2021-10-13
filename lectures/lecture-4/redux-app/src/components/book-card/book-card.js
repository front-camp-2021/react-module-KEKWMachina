import React, { useContext } from "react";
// import React from "react";
import { useDispatch } from "react-redux";
import { Card, Header, Icon, Button, Divider } from "semantic-ui-react";
import PropTypes from "prop-types";
import { CHANGE_FAVORITE_STATUS } from "../../features/books/actions/actions";
import { ThemeContext } from "../root-provider/root-provider";

export function BookCard({ card }) {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      style={{
        padding: "10px",
        marginRight: "25px",
        background: theme.background,
        color: theme.fontColor,
      }}
    >
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
        onClick={() =>
          dispatch({ type: CHANGE_FAVORITE_STATUS, payload: card.id })
        }
      />
    </Card>
  );
}

BookCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  isFavorite: PropTypes.bool,
  description: PropTypes.string,
};
