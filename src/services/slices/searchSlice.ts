import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  query: '',
  param: "name",
  isOpen: false
}

export const searchSlice = createSlice({
  name: "SEARCH",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchParam: (state, action) => {
      state.param = action.payload;
      state.isOpen = false;
    },
    setIsPopupOpen: (state, action) => {
      state.isOpen = action.payload;
    }
  }
})

export const selectSearch = (state: RootState) => state.search;
export const {setSearchQuery, setSearchParam, setIsPopupOpen} = searchSlice.actions;
