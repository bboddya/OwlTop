import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductModel } from '../../interfaces/product.interface';
import { withLayout } from '../../layouts/Layout';
import { firstLevelMenu } from '../../helpers/helpers';
import { API } from '../../helpers/api';

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return <>{products && products.length}</>;
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  // Через перебор возвращает все возможные маршруты страниц [type] с их [alias]
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: m.id,
    });

    paths = paths.concat(menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  // двухслойный динамический путь: 1. находим объект с нужной категорией в массиве через сравнение элементов с params
  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id,
    });

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias);
    const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
      category: page.category,
      limit: 10,
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
