import React from 'react';
import { ISidebar } from './Sidebar.props';

import styles from './Sidebar.module.css';
import cn from 'classnames';

import { Menu } from '../Menu/Menu';

export const Sidebar = ({ className, ...props }: ISidebar): JSX.Element => {
  return (
    <div className={className} {...props}>
      <Menu />
    </div>
  );
};
