import React from 'react';
import styles from "./Popup.module.scss";
import { useAppDispatch, useAppSelector } from "src/services/hooks";
import { Endpoint, selectEndpoint } from "src/services/slices/endpointSlice";
import { setSearchParam } from 'src/services/slices/searchSlice';

type Props = {
  isOpen: boolean
}

export const Popup = ({isOpen}: Props):JSX.Element => {
  const endpoint = useAppSelector(selectEndpoint);
  const dispatch = useAppDispatch();

  const handlerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.textContent?.toLowerCase();
    dispatch(setSearchParam(value))
  }

  return (
    <>
      {
        isOpen &&
        // TODO: сделать через map
          <div className={styles.popup}>
            <div onClick={handlerClick}>ID</div>
            <div onClick={handlerClick}>Name</div>
            <div onClick={handlerClick}>{endpoint === Endpoint.CHARACTER ? "Status" : "Type"}</div>
            <div onClick={handlerClick}>Created</div>
          </div>
      }
    </>
  )
}
