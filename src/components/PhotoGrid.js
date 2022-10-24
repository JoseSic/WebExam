import Card from "./Card";
import useInput from "./hooks/use-input";
import classes from "./PhotoGrid.module.css";
import Button from "./UI/Button";
import Input from "./UI/Input";
const PhotoGrid = (props) => {
  const { value: inputLimitValue, valueChangeHandler: inputChangeHandler } =
    useInput(props.enteredData.limit);

  const limitKeyDown = (event) => {
    if (event.key === "Enter") {
      const dataLimitValue = event.target.value;
      if (
        dataLimitValue !== "" &&
        dataLimitValue !== "0" &&
        props.enteredData.pages > 0
      ) {
        const parameters = {
          ...props.parametersValues,
          limit: dataLimitValue,
        };
        props.onSendDataRequest(parameters);
      }
    }
  };

  const newPage = (nextOffset) => {
    const parameters = {
      ...props.parametersValues,
      limit: props.enteredData.limit,
      offset: nextOffset,
    };
    props.onSendDataRequest(parameters);
  };

  const nextPage = () => {
    if (props.enteredData.currentPage < props.enteredData.pages) {
      const nextOffset = props.enteredData.offset + +props.enteredData.limit;
      newPage(nextOffset);
    }
  };

  const previousPage = () => {
    if (props.enteredData.currentPage > 1) {
      const nextOffset = props.enteredData.offset - +props.enteredData.limit;
      newPage(nextOffset);
    }
  };

  const dataActions = (
    <>
      <div className={classes["form-control"]}>
        <Input
          input={{
            id: "limit",
            type: "number",
            min: "1",
            max: "500",
            step: "1",
            disabled: props.enteredData.photos.length <= 0,
            value: inputLimitValue,
            onChange: inputChangeHandler,
            onKeyDown: limitKeyDown,
          }}
        >
          Limit:{" "}
        </Input>
        <Button type="button" onClick={previousPage}>
          Previous
        </Button>
        <Button type="button" onClick={nextPage}>
          Next
        </Button>
        <span>
          Page: {props.enteredData.currentPage} / {props.enteredData.pages}
        </span>
      </div>
    </>
  );
  const cardPhotos = (
    <>
      <div className={classes.container}>
        {props.enteredData.photos.map((item) => (
          <Card key={item.id} photo={item}></Card>
        ))}
      </div>
    </>
  );

  return (
    <>
      {dataActions} {cardPhotos}
    </>
  );
};

export default PhotoGrid;
