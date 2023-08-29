import styles from "./TableHeader.module.scss";
import { ReactComponent as FilterIcon } from 'assets/filter.svg';
import { ReactComponent as AddIcon } from 'assets/add.svg';
import { TableHeaderBot } from "../table-header-bot/TableHeaderBot";
import { useAppDispatch, useAppSelector } from "src/services/hooks";
import React from "react";
import { setEndpoint } from "src/services/slices/endpointSlice";
import { selectSort, setSortParam } from "src/services/slices/sortSlilce";
import { selectSearch, setIsPopupOpen, setSearchQuery } from "src/services/slices/searchSlice";
import { Popup } from "../UI/popup/Popup";

export const TableHeader = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort);
  const search = useAppSelector(selectSearch);

  const handlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentEndpoint = e.currentTarget.value;

    dispatch(setEndpoint(currentEndpoint));

    if (sort.param === "Status") {
      dispatch(setSortParam("Type"))
    } else if (sort.param === "Type") {
      dispatch(setSortParam("Status"))
    }

  }

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    dispatch(setSearchQuery(query));
  }

  const handlerClick = () => {
    dispatch(setIsPopupOpen(!search.isOpen));
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__top}>
        <Popup isOpen={search.isOpen}/>
        <div className={styles.header__actions}>
          <button className={styles.header__filter} onClick={handlerClick}>
            <FilterIcon />
          </button>
          <div className={styles.header__search}>
            <input type="search" placeholder="Search..." onChange={(e) => handlerSearch(e)}/>
          </div>
        </div>
        <select
          name="api"
          id="api"
          className="select"
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
