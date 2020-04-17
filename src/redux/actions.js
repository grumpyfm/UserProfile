export const SAVE_DATA = "SAVE_DATA";
export const GET_DATA = "GET_DATA";
export const HANDLE_PUT_DATA_SUCCESS = "HANDLE_PUT_DATA_SUCCESS";

export const handlePutDataSuccess = (success, error) => {
  return { type: HANDLE_PUT_DATA_SUCCESS, success, error };
};

export const saveData = () => {
  return { type: SAVE_DATA };
};

export const getData = () => {
  return { type: GET_DATA };
};
