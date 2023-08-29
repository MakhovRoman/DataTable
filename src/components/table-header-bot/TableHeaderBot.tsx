import { useAppSelector } from "src/services/hooks";
import { CheckBox } from "../UI/check-box/CheckBox";
import { SortIcon } from "../UI/sort-icon/SortIcon";
import styles from "./TableHeaderBot.module.scss";
import { Endpoint, selectEndpoint } from "src/services/slices/endpointSlice";

export const TableHeaderBot = ():JSX.Element => {
  const endpoint = useAppSelector(selectEndpoint);

  return (
    <div className={styles.header__bot}>
      <div className={styles["header__bot-container"]}>
        <CheckBox id="allCheck"/>
        <SortIcon label="id"/>
        <SortIcon label="name"/>
        <SortIcon label={endpoint === Endpoint.CHARACTER ? "Status" : "Type"}/>
        <SortIcon label="Created"/>
      </div>
    </div>
  )
}
