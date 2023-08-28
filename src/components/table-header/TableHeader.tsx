import styles from "./TableHeader.module.scss";
import { ReactComponent as FilterIcon } from 'assets/filter.svg';
import { ReactComponent as AddIcon } from 'assets/add.svg';
import { TableHeaderBot } from "../table-header-bot/TableHeaderBot";
import { useAppDispatch } from "src/services/hooks";
import React from "react";
import { setEndpoint } from "src/services/slices/endpointSlice";

export const TableHeader = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const handlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentEndpoint = e.currentTarget.value;

    dispatch(setEndpoint(currentEndpoint));
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.header__actions}>
          <button className={styles.header__filter}>
            <FilterIcon />
          </button>
          <div className={styles.header__search}>
            <input type="search" placeholder="Search..."/>
          </div>
        </div>
        <select
          name="api"
          id="api"
          className={styles.header__api}
          onChange={(e) => handlerSelect(e)}
        >
          <option value="LOCATION">API Location</option>
          <option value="CHARACTER">API Character</option>
        </select>
        <button className={styles.header__add}>
          <AddIcon />
          <span>Add customer</span>
        </button>
      </div>
      <TableHeaderBot />
    </div>
  )
}
