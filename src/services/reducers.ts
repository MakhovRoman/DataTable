import { combineReducers } from "@reduxjs/toolkit";
import { endpointSlice } from "./slices/endpointSlice";
import { dataSlice } from "./slices/dataSlice";
import { paginationSlice } from "./slices/paginationSlice";
import { sortSlice } from "./slices/sortSlilce";

export const rootReducer = combineReducers({
  endpoint: endpointSlice.reducer,
  data: dataSlice.reducer,
  pagination: paginationSlice.reducer,
  sort: sortSlice.reducer
})
