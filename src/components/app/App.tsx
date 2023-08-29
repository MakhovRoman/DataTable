import { Table } from "../table/Table";
import styles from "./App.module.scss";
import { useAppDispatch, useAppSelector } from "src/services/hooks";
import { selectEndpoint } from "src/services/slices/endpointSlice";
import { apiEndpoints } from "src/services/endpoints";
import { dataThunk, selectData } from "src/services/slices/dataSlice";
import React from "react";
import { selectPagination, setTotalRow } from "src/services/slices/paginationSlice";
import { API } from "src/services/api";

export const App = ():JSX.Element => {
  const endpoint = useAppSelector(selectEndpoint);
  const pagination = useAppSelector(selectPagination);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const setTotal = async() => {
      const pages = await API.load(apiEndpoints[endpoint]);

      dispatch(setTotalRow(pages.info.count));
    }

    setTotal();
    dispatch(dataThunk.load(`${apiEndpoints[endpoint]}/${pagination.queryParams}`))
  }, [dispatch, endpoint, pagination])

  const data = useAppSelector(selectData);

  return (
    <section className={styles.app}>
      <Table data={data}/>
    </section>
  )
}
