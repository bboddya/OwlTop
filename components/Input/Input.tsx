import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';

import styles from './Input.module.css';
import cn from 'classnames';

// forwardRef - проброс ref на верхний уровень
export const Input = forwardRef(
  (
    { error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <input
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
