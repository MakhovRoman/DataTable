import React from 'react';

import { ReactComponent as SortActiveIcon } from 'assets/column-sorting-active.svg';
import { ReactComponent as SortDisableIcon } from 'assets/column-sorting-disable.svg';

import styles from "./SortIcon.module.scss";
import clsx from 'clsx';

type TSortIcon = {
  className?: string,
  label: string
}

export const SortIcon = ({
  className,
  label,
}: TSortIcon):JSX.Element => {
  const [isRevert, setIsRevert] = React.useState(false);
  const handleClick = () => setIsRevert(!isRevert);

  return (
    <div
      className={clsx(
        styles.sort,
        className && className
      )}
      onClick={handleClick}
    >
      <span className={styles.sort__label}>{label}</span>
      <div className={styles.sort__icon}>
        <SortActiveIcon
          className={clsx(
            isRevert && styles.sort_revert
          )}
        />
      </div>
    </div>
  )
}
