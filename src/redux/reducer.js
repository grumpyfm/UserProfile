import * as actionTypes from "./actions";
import { initialState } from "./initiaState";

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DATA:
      return Object.assign({}, state, {
        userInfo: action.data.userInfo,
        children: action.data.children,
        putDataSuccess: !state.putDataSuccess,
      });

    case actionTypes.PUT_DATA_SUCCESS:
      return Object.assign({}, state, {
        putDataSuccess: action.success,
      });

    default:
      return state;
  }
};
