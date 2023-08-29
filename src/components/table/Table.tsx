import { useAppSelector } from "src/services/hooks";
import { TableFooter } from "../table-footer/TableFooter";
import { TableHeader } from "../table-header/TableHeader";
import { TableRow } from "../table-row/TableRow";
import styles from "./Table.module.scss";
import { selectSort } from "src/services/slices/sortSlilce";
import { sortData } from "src/utils/sort";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TProps = Record<string, any>

export const Table = ({data}: TProps):JSX.Element => {
  const mock = data?.results || data;
  console.log(mock)
  const sort = useAppSelector(selectSort);

  return (
    <div className={styles.table}>
      <TableHeader />
      {
        mock && sortData(mock, sort.param, sort.isRevert).map((item: Record<string, string>) => {
          return (
            <TableRow
              id={item.id}
              key={item.id}
              name={item.name}
              created={item.created}
              type={item.type}
              status={item.status}
            />
          )
        })
      }
      <TableFooter />
    </div>
  )
}
