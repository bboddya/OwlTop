import React from 'react';
import { ILayout } from './Layout.props';

import styles from './Layout.module.css';

import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

import { AppContextProvider, IAppContext } from '../context/app.context';

export const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

// функция обертки компонента в layout
export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: React.FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      // props.menu и props.firstCategory стали доступны благодаря объединению типа с IAppContext
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
