import clsx from "clsx";
import { SortIcon } from "../UI/sort-icon/SortIcon";
import styles from "./TableHeaderBot.module.scss";

export const TableHeaderBot = ():JSX.Element => {
  return (
    <div className={styles.header__bot}>
      <div className={styles["header__bot-container"]}>
        <label htmlFor="checkAll" className="checkBox">
          <input type="checkbox" id="checkAll" className="checkBox__input"/>
          <span className="checkBox__checkmark"></span>
        </label>
        <SortIcon label="#"/>
        <SortIcon label="name"/>
        <div className={styles["header__bot-item"]}>description</div>
        <SortIcon label="Status"/>
        <div className={clsx(
          styles["header__bot-item"],
          styles["header__bot-item_right"]
        )}>Rate</div>
        <div className={clsx(
          styles["header__bot-item"],
          styles["header__bot-item_right"]
        )}>Balance</div>
        <div className={clsx(
          styles["header__bot-item"],
          styles["header__bot-item_right"]
        )}>Deposit</div>
      </div>
    </div>
  )
}
