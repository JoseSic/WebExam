import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <figure className={classes["boxFigure"]}>
        <img alt={props.photo.title} src={props.photo.thumbnailUrl} />
      </figure>
      <div className={classes.summary}>
        <div>
          <span>Photo</span>
          <div className={classes.content}>
            <span>Id: </span>
            {props.photo.id}
          </div>
          <div className={classes.content}>
            <span>Title: </span>
            {props.photo.title}
          </div>
        </div>

        <div>
          <span>Album</span>
          <div className={classes.content}>
            <span>Id: </span>
            {props.photo.albumItem.Id}
          </div>
          <div className={classes.content}>
            <span>Title: </span>
            {props.photo.albumItem.title}
          </div>
        </div>

        <div>
          <span>User</span>
          <div className={classes.content}>
            <span>Id: </span>
            {props.photo.albumItem.user.id}
          </div>
          <div className={classes.content}>
            <span>User Name: </span>
            {props.photo.albumItem.user.name}
          </div>
          <div className={classes.content}>
            <span>User: </span>
            {props.photo.albumItem.user.username}
          </div>
          <div className={classes.content}>
            <span>Email: </span>
            {props.photo.albumItem.user.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
