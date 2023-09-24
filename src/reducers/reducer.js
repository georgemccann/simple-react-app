import localforage from "localforage";
import {combineReducers} from "redux";

import {AppReducer} from "./AppReducer"; 

const appReducer = combineReducers({
  initialState: AppReducer,
});


export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
