import { PEOPLE } from "../../db";
import classes from "./Content.module.scss";
const Content = () => {
  return (
    <div className={classes.content}>
      {PEOPLE.map((el) => (
        <div>{el.name}</div>
      ))}
    </div>
  );
};

export default Content;
