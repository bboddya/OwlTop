import React from 'react';
import { SortEnum, SortProps } from './Sort.props';

import SortIcon from './sort.svg';

import styles from './Sort.module.css';
import cn from 'classnames';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon} /> По рейтенгу
      </div>

      <div
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon className={styles.sortIcon} /> По&nbsp;цене
      </div>
    </div>
  );
};
