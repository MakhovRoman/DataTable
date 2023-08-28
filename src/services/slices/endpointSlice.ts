import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum Endpoint {
  LOCATION = "LOCATION",
  CHARACTER = "CHARACTER"
}

export type TEndpoit = Endpoint.LOCATION | Endpoint.CHARACTER;

const initialState = {
  value: Endpoint.LOCATION
}

export const endpointSlice = createSlice({
  name: "ENDPOINTS",
  initialState,
  reducers: {
    setEndpoint(state, action) {
      state.value = action.payload
    }
  }
});

export const selectEndpoint = (state: RootState) => state.endpoint.value;
export const { setEndpoint } = endpointSlice.actions
