import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

import BookIcon from './icons/book.svg';
import BoxIcon from './icons/box.svg';
import CloudIcon from './icons/cloud.svg';
import HatIcon from './icons/hat.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <HatIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
