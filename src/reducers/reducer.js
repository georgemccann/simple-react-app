import localforage from "localforage";
import {combineReducers} from "redux";

import {CustomerReducer} from "./CustomerReducer"; 

const appReducer = combineReducers({
  customers: CustomerReducer,
});


export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
