import * as actionTypes from "./actions";
import { initialState } from "./initiaState";

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DATA:
      return Object.assign({}, state, {
        userInfo: action.data.userInfo,
        children: action.data.children ? action.data.children : [],
      });

    case actionTypes.HANDLE_PUT_DATA_SUCCESS:
      return Object.assign({}, state, {
        putDataSuccess: action.success,
        errorMessage: action.error,
      });

    default:
      return state;
  }
};
