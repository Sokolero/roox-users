import * as React from 'react';
import styles from './Button.module.scss';

type BtnProps = {
  children: string;
  styled: string;
  onClick?: React.ReactEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children, styled, onClick, type = 'button',
}: BtnProps) {
  return (
    <button type={type} onClick={onClick} className={styles[styled]} disabled={styled === 'button_disabled'}>
      { children }
    </button>
  );
}
