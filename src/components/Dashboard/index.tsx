import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Button from '../Button';
import { choiceFilter } from '../../redux';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.users.filter);
  const location = useLocation();

  const handleChoiceFilter = (filterType): React.ReactEventHandler<HTMLButtonElement> => (event) => {
    dispatch(choiceFilter(filterType));
  };

  return (
    <>
      <div className={styles.row}>сортировка</div>
      <div className={styles.row}>
        <Button
          onClick={handleChoiceFilter('city')}
          type="button"
          styled={location.pathname === '/' ? 'button' : 'button_disabled'}
        >
          по городу
        </Button>
        <span className={filter === 'city' ? styles.filterLabel : styles.filterLabel_disabled} />
      </div>
      <div className={styles.row}>
        <Button
          onClick={handleChoiceFilter('company')}
          type="button"
          styled={location.pathname === '/' ? 'button' : 'button_disabled'}
        >
          по компании
        </Button>
        <span className={filter === 'company' ? styles.filterLabel : styles.filterLabel_disabled} />
      </div>
    </>
  );
}
