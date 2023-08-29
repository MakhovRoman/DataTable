import { useAppDispatch, useAppSelector } from "src/services/hooks";
import styles from "./TableFooter.module.scss";
import { selectPagination, setCurrentPage, setPerPage } from "src/services/slices/paginationSlice";
import { dataThunk } from "src/services/slices/dataSlice";
import { selectEndpoint } from "src/services/slices/endpointSlice";
import { apiEndpoints } from "src/services/endpoints";
import { useEffect, useState } from "react";

import {ReactComponent as Arrow} from "assets/button-arrow.svg";

export const TableFooter = () => {
  const pagination = useAppSelector(selectPagination);
  const endpoint = useAppSelector(selectEndpoint);

  const dispatch = useAppDispatch();

  const [current, setCurrent] = useState(pagination.currentPage);

  useEffect(() => {
    dispatch(dataThunk.load(`${apiEndpoints[endpoint]}/${pagination.queryParams}`))
  }, [dispatch, endpoint, pagination])

  const handlerSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const current = e.currentTarget.value;
    setCurrent(1);
    dispatch(setPerPage(current));
    dispatch(setCurrentPage(1));
  }

  const handlerChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = e.currentTarget.value;
    setCurrent(+current);
    dispatch(setCurrentPage(current))
  }

  const incrementPage = () => {
    if (current < (pagination.totalPages as number)) {
      setCurrent(current + 1)
      dispatch(setCurrentPage(current + 1))
    }
  }

  const decrementPage = () => {
    if(current > 1) {
      setCurrent(current - 1)
      dispatch(setCurrentPage(current - 1))
    }
  }

  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        {pagination.currentRange} of {pagination.totalRows}
      </div>
      <div className={styles.footer__action}>
        <select
          name="perPage"
          id="perPage"
          defaultValue={15}
          className="select"
          onChange={(e) => handlerSelect(e)}
        >
          <option value="5" >5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <div className={styles["footer__action-pages"]}>
          <button
            onClick={decrementPage}
          >
            <Arrow className={styles.revert} />
          </button>
          <div className={styles["footer__action-values"]}>
            <input
              type="text"
              value={current}
              onChange={(e) => handlerChangePage(e)}
            /> / {pagination.totalPages}
          </div>
          <button
            onClick={incrementPage}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  )
}
