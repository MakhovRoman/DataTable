import { dateTransform } from "src/utils/dateTransform";
import { CheckBox } from "../UI/check-box/CheckBox";
import styles from "./TableRow.module.scss";

type TTableRow = {
  id: string,
  name: string,
  type?: string,
  status?: string,
  created: string,
}

export const TableRow = ({
  id,
  name,
  type,
  created,
  status
}: TTableRow): JSX.Element => {
  const {day, time} = dateTransform(created);

  return (
    <div className={styles.row}>
      <CheckBox id={id}/>
      <div>{id}</div>
      <div>{name}</div>
      <div>{type ? type : status}</div>
      <div className={styles.row__created}>
        <span>{day}</span>
        <span>{time}</span>
      </div>
    </div>
  )
}
