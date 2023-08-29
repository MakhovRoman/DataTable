import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { API } from "../api";

const initialState = {
  list: null,
  isLoading: false,
  isError: false
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
  },
  extraReducers: (builder) => {
    builder.addCase(dataThunk.load.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    }),
    builder.addCase(dataThunk.load.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
    }),
    builder.addCase(dataThunk.load.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    })
  }
});

export const selectData = (state: RootState) => state.data.list;
export const selectIsLoading = (state: RootState) => state.data.isLoading;
export const { setData } = dataSlice.actions;
