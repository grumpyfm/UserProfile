import { createStore, applyMiddleware } from "redux";
import { default as ReduxThunk } from "redux-thunk";

import { appReducer } from "./reducer";

const Store = createStore(appReducer, applyMiddleware(ReduxThunk));

export default Store;
