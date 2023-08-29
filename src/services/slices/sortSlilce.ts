import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  param: "id",
  isRevert: false
}

export const sortSlice = createSlice({
  name: "SORT",
  initialState,
  reducers: {
    setSortParam: (state, action) => {
      state.param = action.payload
    },
    setRevert: (state, action) => {
      state.isRevert = action.payload
    }
  }
})

export const selectSort = (state: RootState) => state.sort;
export const { setSortParam, setRevert } = sortSlice.actions;
