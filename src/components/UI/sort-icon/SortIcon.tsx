import React, { SyntheticEvent } from 'react';

import { ReactComponent as SortActiveIcon } from 'assets/column-sorting-active.svg';
import { ReactComponent as SortDisableIcon } from 'assets/column-sorting-disable.svg';

import styles from "./SortIcon.module.scss";
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from 'src/services/hooks';
import { selectSort, setRevert, setSortParam } from 'src/services/slices/sortSlilce';

type TSortIcon = {
  className?: string,
  label: string
}

export const SortIcon = ({
  className,
  label,
}: TSortIcon):JSX.Element => {
  const [isRevert, setIsRevert] = React.useState(false);
  const sortField = useAppSelector(selectSort);

  const dispatch = useAppDispatch();

  const handleSort = () => {
    setIsRevert(!isRevert);
    dispatch(setRevert(!isRevert));
  }

  const handleClick = (e: SyntheticEvent) => {
    const id = e.currentTarget.id;

    sortField.param === id ? handleSort() : dispatch(setRevert(false));

    dispatch(setSortParam(id));
  };

  return (
    <div
      className={clsx(
        styles.sort,
        className && className
      )}
      onClick={(e) => handleClick(e)}
      id={label}
    >
      <span className={styles.sort__label}>{label}</span>
      <div className={styles.sort__icon}>
        {
          sortField.param === label ?
          <SortActiveIcon
            className={clsx(
              isRevert && styles.sort_revert
            )}
          />
          :
          <SortDisableIcon />
        }
      </div>
    </div>
  )
}
