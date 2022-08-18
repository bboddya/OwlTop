import React, { useReducer } from 'react';
import { HhData, Htag, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';

import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import { Sort } from '../../components/Sort/Sort';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>

        {products && (
          <Tag color="gray" size="m">
            {products.length}
          </Tag>
        )}

        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>

        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>

          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} /> // вставка html в div
      )}

      <Htag tag="h2">Получаемые навыки</Htag>

      {page.tags.map((t) => (
        <Tag key={t} color="primary" size={'s'}>
          {t}
        </Tag>
      ))}
    </div>
  );
};
