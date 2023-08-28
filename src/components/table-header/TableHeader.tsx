import styles from "./TableHeader.module.scss";
import { ReactComponent as FilterIcon } from 'assets/filter.svg';
import { ReactComponent as AddIcon } from 'assets/add.svg';
import { TableHeaderBot } from "../table-header-bot/TableHeaderBot";

export const TableHeader = ():JSX.Element => {
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
        <select name="api" id="api" className={styles.header__api}>
          <option value="location">API Location</option>
          <option value="character">API Character</option>
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
