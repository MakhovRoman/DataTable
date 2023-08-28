import { Table } from "../table/Table";
import styles from "./App.module.scss";

export const App = ():JSX.Element => {
  return (
    <section className={styles.app}>
      <Table />
    </section>
  )
}
