import styles from "./Loader.module.scss";

export const Loader = ():JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  )
}
