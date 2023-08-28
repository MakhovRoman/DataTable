import { TableHeader } from "../table-header/TableHeader";
import styles from "./Table.module.scss";

export const Table = ():JSX.Element => {
  return (
    <div className={styles.table}>
      <TableHeader />
    </div>
  )
}
