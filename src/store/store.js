import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {offline} from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import localForage from "localforage";

import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {rootReducer} from "../reducers/reducer";

 

localForage.config({
  name: "Simple React App",
  description: "persistent storage",
});

const config = {
  ...offlineConfig,
  persistOptions: {
    // Include here the reducer name if you don't want to persist the data
    blacklist: ["offline", "_persist", "location", "sync"],
    keyPrefix: "offline:", 
    storage: localForage,
  },
};

const logger = createLogger();
const middlewares = [thunkMiddleware, logger];
const enhancers = [applyMiddleware(...middlewares), offline({...config})];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(
  rootReducer,
  composedEnhancers,
);
