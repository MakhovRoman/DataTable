import { createSlice } from "@reduxjs/toolkit";
import { setQuery } from "src/utils/setQuery";
import { RootState } from "../store";

const [initQuery, , totalPages] = setQuery(1, 126, 15);

const initialState = {
  currentRange: "1-15",
  totalRows: 126,
  perPage: 15,
  currentPage: 1,
  queryParams: initQuery,
  totalPages: totalPages
}

export const paginationSlice = createSlice({
  name: "PAGINATION",
  initialState,
  reducers: {
    setPerPage: (state, action) => {
      state.perPage = action.payload;
      const [query, min, max, totalPages] = setQuery(state.currentPage, state.totalRows, action.payload);
      state.currentRange = `${min}-${max}`;
      state.queryParams = query;
      state.totalPages = totalPages;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      const [query, min, max, totalPages] = setQuery(action.payload, state.totalRows, state.perPage);
      state.currentRange = `${min}-${max}`;
      state.queryParams = query;
      state.totalPages = totalPages;
    }
  }
});

export const selectPagination = (state:RootState) => state.pagination;
export const { setPerPage, setCurrentPage } = paginationSlice.actions;
