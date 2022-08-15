import React from 'react';
import { ISidebar } from './Sidebar.props';
import Logo from '../logo.svg';

import styles from './Sidebar.module.css';
import cn from 'classnames';

import { Menu } from '../Menu/Menu';
import { Search } from '../../pages/search';

export const Sidebar = ({ className, ...props }: ISidebar): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={cn(styles.logo)} />

      <Search />

      <Menu />
    </div>
  );
};
