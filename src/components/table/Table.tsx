import { useAppSelector } from "src/services/hooks";
import { TableFooter } from "../table-footer/TableFooter";
import { TableHeader } from "../table-header/TableHeader";
import { TableRow } from "../table-row/TableRow";
import styles from "./Table.module.scss";
import { selectSort } from "src/services/slices/sortSlilce";
import { sortData } from "src/utils/sort";
import { selectSearch } from "src/services/slices/searchSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TProps = Record<string, any>

export const Table = ({data}: TProps):JSX.Element => {
  let mock = data?.results || data;
  const sort = useAppSelector(selectSort);
  const search = useAppSelector(selectSearch);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mock = search.query ? mock.filter((item: Record<string, any>) => item[search.param].toLowerCase().includes(search.query.toLowerCase())) : mock;

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
