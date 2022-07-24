import React from 'react';
import { IPtag } from './Ptag.props';

import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ size = 'm', children, className, ...props }: IPtag): JSX.Element => {
  return (
    <p
      className={cn(className, styles.p, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
