import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <label className={classes.label} htmlFor={props.input.id}>
        {props.children}
      </label>
      <input className={classes.input} {...props.input}></input>
    </>
  );
};

export default Input;
