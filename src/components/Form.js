import classes from "./Form.module.css";
import useInput from "./hooks/use-input";
import Button from "./UI/Button";
import Input from "./UI/Input";
const Form = (props) => {
  const {
    value: photoTitleValue,
    valueChangeHandler: photoTitleChangeHandler,
  } = useInput("");

  const { value: userEmailValue, valueChangeHandler: userEmailChangeHandler } =
    useInput("");

  const {
    value: albumTitleValue,
    valueChangeHandler: albumTitleChangeHandler,
  } = useInput("");

  const submitHandler = (event) => {
    event.preventDefault();
    const parameters = {};
    if (photoTitleValue.trim() !== "") {
      parameters.title = photoTitleValue;
    }
    if (userEmailValue.trim() !== "") {
      parameters["album.user.email"] = userEmailValue;
    }
    if (albumTitleValue.trim() !== "") {
      parameters["album.title"] = albumTitleValue;
    }

    props.onSubmitRequest(parameters);
  };

  return (
    <div className={classes["data-form"]}>
      <div>
        <h3>Parameters</h3>
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes["control-group"]}>
          <div className={classes["form-control"]}>
            <Input
              input={{
                id: "photoTitle",
                type: "text",
                value: photoTitleValue,
                onChange: photoTitleChangeHandler,
              }}
            >
              Photo Title
            </Input>
          </div>
          <div className={classes["form-control"]}>
            <Input
              input={{
                id: "albumTitle",
                type: "text",
                value: albumTitleValue,
                onChange: albumTitleChangeHandler,
              }}
            >
              Album Title
            </Input>
          </div>
        </div>
        <div className={classes["control-group"]}>
          <div className={classes["form-control"]}>
            <Input
              input={{
                id: "userEmail",
                type: "text",
                value: userEmailValue,
                onChange: userEmailChangeHandler,
              }}
            >
              User Email
            </Input>
          </div>
          <div className={classes["form-actions"]}>
            <Button type="onSubmit">Search</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
