import { combineReducers } from "@reduxjs/toolkit";
import { endpointSlice } from "./slices/endpointSlice";
import { dataSlice } from "./slices/dataSlice";

export const rootReducer = combineReducers({
  endpoint: endpointSlice.reducer,
  data: dataSlice.reducer,
})
