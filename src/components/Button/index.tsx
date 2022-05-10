import * as React from "react";
import styles from "./Button.module.scss";

type BtnProps = {
  children: string;
  styled: string;
}

export default function Button({ children, styled }: BtnProps) {
  return(
    <button className={styles[styled]} >
      { children }
    </button>
  )
}
