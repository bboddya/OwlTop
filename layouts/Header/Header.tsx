import React from 'react';
import { IHeader } from './Header.props';

import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({ className, ...props }: IHeader): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      Header
    </header>
  );
};
