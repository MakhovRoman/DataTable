import styles from "./CheckBox.module.scss";

type TCheckBox = {
  id: string
}

export const CheckBox = ({id}: TCheckBox):JSX.Element => {
  return (
    <label htmlFor={id} className={styles.checkBox}>
      <input type="checkbox" id={id} className={styles.checkBox__input}/>
      <span className={styles.checkBox__checkmark}></span>
    </label>
  )
}
