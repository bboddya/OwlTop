import React, { ForwardedRef, forwardRef } from 'react';
import { ICard } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = forwardRef(({ color = 'white', children, className, ...props }: ICard, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
