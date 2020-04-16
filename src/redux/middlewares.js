import * as services from "../services";

export const putDataMiddleware = (data) => {
  return (dispatch, getState) => {
    services.setItems(data);
    dispatch({ type: "SAVE_DATA", data: data });
    services.putData(data).then((res) => {
      dispatch({ type: "PUT_DATA_SUCCESS", success: res });
    });
  };
};

export const getDataMiddleware = () => {
  return (dispatch, getState) => {
    services.getItems().then((res) => {
      if (res) {
        dispatch({ type: "SAVE_DATA", data: res });
      }
    });
  };
};
