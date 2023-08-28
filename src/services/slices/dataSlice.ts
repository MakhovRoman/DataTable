import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { API } from "../api";

const initialState = {
  list: null
}

export const dataThunk = {
  load: createAsyncThunk(
    "DATA/load",
    async(url:string, {dispatch}) => {
      const data = await API.load(url);
      dispatch(dataSlice.actions.setData(data));
    }
  )
}

export const dataSlice = createSlice({
  name: "DATA",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.list = action.payload
    }
  }
});

export const selectData = (state: RootState) => state.data.list;
export const { setData } = dataSlice.actions;
