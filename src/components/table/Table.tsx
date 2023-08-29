import { TableFooter } from "../table-footer/TableFooter";
import { TableHeader } from "../table-header/TableHeader";
import { TableRow } from "../table-row/TableRow";
import styles from "./Table.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TProps = Record<string, any>

export const Table = ({data}: TProps):JSX.Element => {

  const mock = data?.results || data;

  return (
    <div className={styles.table}>
      <TableHeader />
      {
        mock && mock.map((item: Record<string, string>) => {
          return (
            <TableRow
              id={item.id}
              key={item.id}
              name={item.name}
              created={item.created}
              type={item.type}
            />
          )
        })
      }
      <TableFooter />
    </div>
  )
}
