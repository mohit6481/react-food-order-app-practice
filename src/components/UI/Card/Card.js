import classes from "./Card.module.css";

const Cards = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Cards;
