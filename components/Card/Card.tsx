import React from 'react';
import { ICard } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ color = 'white', children, className, ...props }: ICard): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
