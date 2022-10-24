import { useState, useEffect, useCallback } from "react";
import Form from "./Form";
import PhotoGrid from "./PhotoGrid";
import useHttp from "../components/hooks/use-http";

function MetaPhoto() {
  const [parametersValues, setParameters] = useState();
  const [enteredData, setData] = useState({
    pages: 0,
    offset: 0,
    limit: 0,
    currentPage: 0,
    photos: [],
  });
  const apiUri = "http://localhost:3001/api/photos?";

  const { isLoading, isError, sendDataRequest } = useHttp();

  const setDataHandler = useCallback((dataObject) => {
    const newObject = {
      pages: dataObject.pages,
      offset: dataObject.offset,
      limit: dataObject.limit,
      currentPage: dataObject.currentPage,
      photos: [...dataObject.photos],
    };
    setData(newObject);
  }, []);

  useEffect(() => {
    sendDataRequest(apiUri, "", setDataHandler);
  }, [sendDataRequest, setDataHandler]);

  const submitRequest = (parameters) => {
    setParameters(parameters);
    sendDataRequest(apiUri, parameters, setDataHandler);
  };

  const submitNextPageRequest = (parameters) => {
    sendDataRequest(apiUri, parameters, setDataHandler);
  };
  return (
    <>
      <section>
        <Form onSubmitRequest={submitRequest}></Form>
      </section>
      <section>
        {isLoading && <p>is Loading...!</p>}
        {!isLoading && isError && <p>{isError}</p>}
        {!isLoading && enteredData.photos.length > 0 && !isError && (
          <PhotoGrid
            enteredData={enteredData}
            parametersValues={parametersValues}
            onSendDataRequest={submitNextPageRequest}
          />
        )}
        {!isLoading && enteredData.photos.length === 0 && !isError && (
          <p>Found no Photos</p>
        )}
      </section>
    </>
  );
}

export default MetaPhoto;
