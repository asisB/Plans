import { combineReducers } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice"; // Adjusted relative path
import applicationReducer from "./slice/applicationSlice"

const rootReducer = combineReducers({
  account: accountReducer,
  application: applicationReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
