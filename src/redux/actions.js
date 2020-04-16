export const SAVE_DATA = "SAVE_DATA";
export const GET_DATA = "GET_DATA";
export const PUT_DATA_SUCCESS = "PUT_DATA_SUCCESS";

export const putDataSuccess = (success) => {
  return { type: PUT_DATA_SUCCESS, success };
};

export const saveData = () => {
  return { type: SAVE_DATA };
};

export const getData = () => {
  return { type: GET_DATA };
};
