import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { orgazReducer } from "./organization/organization.reducer";
import { accountReducer } from "./account/account.reducer";

const rootReducer = combineReducers({
  orgazModule: orgazReducer,
  accountModule: accountReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
