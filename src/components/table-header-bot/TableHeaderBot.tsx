import { CheckBox } from "../UI/check-box/CheckBox";
import { SortIcon } from "../UI/sort-icon/SortIcon";
import styles from "./TableHeaderBot.module.scss";

export const TableHeaderBot = ():JSX.Element => {
  return (
    <div className={styles.header__bot}>
      <div className={styles["header__bot-container"]}>
        <CheckBox id="allCheck"/>
        <SortIcon label="#"/>
        <SortIcon label="name"/>
        <SortIcon label="Status"/>
        <SortIcon label="Created"/>
      </div>
    </div>
  )
}
