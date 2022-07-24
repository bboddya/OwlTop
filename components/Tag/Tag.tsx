import React from 'react';
import { ITag } from './Tag.props';

import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  size = 'm',
  color = 'primary',
  link,
  children,
  className,
}: ITag): JSX.Element => {
  return (
    <p
      className={cn(className, styles.tag, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.grey]: color === 'grey',
        [styles.primary]: color === 'primary',
      })}
    >
      {link ? <a href={link}>{children}</a> : <>{children}</>}
    </p>
  );
};
