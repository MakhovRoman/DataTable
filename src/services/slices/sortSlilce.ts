import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  param: "#"
}

export const sortSlice = createSlice({
  name: "SORT",
  initialState,
  reducers: {
    setSortParam: (state, action) => {
      state.param = action.payload
    }
  }
})

export const selectSort = (state: RootState) => state.sort;
export const { setSortParam } = sortSlice.actions;
