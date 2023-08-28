import { dateTransform } from "src/utils/dateTransform";
import { CheckBox } from "../UI/check-box/CheckBox";
import styles from "./TableRow.module.scss";

type TTableRow = {
  id: string,
  name: string,
  type: string,
  created: string,
}

export const TableRow = ({
  id,
  name,
  type,
  created,
}: TTableRow): JSX.Element => {
  const {day, time} = dateTransform(created);

  return (
    <div className={styles.row}>
      <CheckBox id={id}/>
      <div>{id}</div>
      <div>{name}</div>
      <div>{type}</div>
      <div className={styles.row__created}>
        <span>{day}</span>
        <span>{time}</span>
      </div>
    </div>
  )
}
